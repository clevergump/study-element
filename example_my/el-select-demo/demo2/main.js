import {SelectNonGroupStrs} from './component/select-non-group-strs.js';

new Vue({
  el: '#app',
  components: {
    'select-non-group-strs': SelectNonGroupStrs
  },
  data: {
    dOptionStrs: [
      'aaa', 'aabbb', 'aaccc', 'ccddd'
    ],
    dEmptyOption: {
      needs: true,
      id: '',
      label: '不限'
    }
  },
  methods: {
    mOnSelectChanged(selected) {
      console.log('selected=', selected);
    }
  }

});
