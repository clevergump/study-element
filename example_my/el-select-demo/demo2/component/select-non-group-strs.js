/**
 * 单选、非分组、纯字符串作为option的下拉框
 *
 * props:
 *     multiple: 是否是多选.
 *       type: Boolean
 *     optionStrs: 项目类别的数组(每一项都是字符串)
 *       type: Array
 *     emptyOption 空选项的相关定义
 *       type: Object.
 *       内部字段：
 *          needs:
 *              含义： 是否需要空选项.
 *              类型： Boolean
 *              默认值： false
 *          id:
 *              含义： 空选项的id
 *              类型： String, Number.
 *              说明： needEmptyOption为true时必须提供
 *          label:
 *              含义： 空选项的label显示名称
 *              类型： String
 *              说明： needEmptyOption为true时必须提供
 *
 * event:
 *      change: 当下拉框所选的内容发生变化时触发. 参数是: 当前所选的option id（单选）或id数组（多选）
 */
// import * as _ from 'lodash-es';
// import Vue from 'vue';

let SelectNonGroupStrs = {
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    // 项目类别的数组
    optionStrs: {
      type: Array,
      default: () => [],
      validator(arr) {
        return Array.isArray(arr) && arr.every(type => {
          return _.isString(type);
        });
      }
    },
    /**
     * 字段：
     * needs
     * id
     * label
     */
    emptyOption: {
      type: Object,
      default: () => {
        return {needs: false};
      },
      validator(emptyOptionObj) {
        if (_.isNil(emptyOptionObj)) {
          return true;
        }
        if (!_.isBoolean(emptyOptionObj.needs)) {
          console.error('emptyOptionObj.needs must be typeof Boolean');
          return false;
        }
        if (emptyOptionObj.needs === false) {
          return true;
        }
        return isOptionIdTypeValid(emptyOptionObj.id) &&
                    isOptionLabelTypeValid(emptyOptionObj.label);

        function isOptionIdTypeValid(id) {
          let ret = _.isString(id) || _.isNumber(id);
          !ret && console.error('id=', id, ', id of emptyOptionObj must be typeof string or number');
          return ret;
        }

        function isOptionLabelTypeValid(label) {
          let ret = _.isString(label);
          !ret && console.error('label=', label, ', label of emptyOptionObj must be typeof string');
          return ret;
        }
      }
    }
  },
  data() {
    return {
      dOptionObjs: [],
      dSelectedOption: null
    };
  },
  created() {
    let vm = this;
    initData();
    setOptionObjs();

    function initData() {
      vm.dSelectedOption = vm.multiple ? [] : null;
    }

    function setOptionObjs() {
      vm.dOptionObjs.splice(0);
      if (vm.emptyOption && vm.emptyOption.needs) {
        Vue.set(vm.dOptionObjs, 0, {
          id: vm.emptyOption.id,
          label: vm.emptyOption.label
        });
      }
      vm.optionStrs.forEach(type => {
        Vue.set(vm.dOptionObjs, vm.dOptionObjs.length, {
          id: type,
          label: type
        });
      });
    }
  },
  methods: {
    mOnChange() {
      let vm = this;
      vm.$emit('change', vm.dSelectedOption);
    }
  },
  template:
    `
      <el-select
          filterable
          placeholder="请选择"
          v-model="dSelectedOption"
          size="mini"
          :multiple="multiple"
          @change="mOnChange"
          >
          <el-option
              v-for="optionObj in dOptionObjs"
              :key="optionObj.id"
              :value="optionObj.id"
              :label="optionObj.label"
          >
          </el-option>
      </el-select>
    `
};

export {
  SelectNonGroupStrs
};
