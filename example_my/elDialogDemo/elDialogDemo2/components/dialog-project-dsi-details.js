var dislogProjectDsiDetail = {
    props: {
        isShow: Boolean,
        projName: String,

        /*
        dsiValue: Number,
        dsiTarget: Number,
        gap: Number,
        totalFrDsiValue: Number,
        blockDsiValue: Number,
        totalDefectDsiValue: Number,
        */
        dsi: Object,
        // width: String, // 550px
    },
    template:
    '<el-dialog :visible.sync="isShow" :center="true" width="550px"' +
    '    :close-on-click-modal="false" :show-close="true">' +
    '    <span slot="title">{{projName}} DSI 详情</span>' +
    '    <table style="margin: 0 auto;">' +
    '        <tr>' +
    '            <td colspan="3" class="titleCell">DSI Value</td>' +
    '            <td class="titleCell">DSI TargeSI/td>' +
    '            <td class="titleCell">GAP</td>' +
    '        </tr>' +
    '        <tr>' +
    '            <td colspan="3">{{dsi.dsiValue}}</td>' +
    '            <td rowspan="3">{{dsi.dsiTarget}}</td>' +
    '            <td rowspan="3">{{dsi.gap}}</td>' +
    '        </tr>' +
    '        <tr>' +
    '            <td class="titleCell">Total FR DSI Value</td>' +
    '            <td class="titleCell">Block DSI Value</td>' +
    '            <td class="titleCell">Total Defect DSI Value</td>' +
    '        </tr>' +
    '        <tr>' +
    '            <td>{{dsi.totalFrDsiValue}}</td>' +
    '            <td>{{dsi.blockDsiValue}}</td>' +
    '            <td>{{dsi.totalDefectDsiValue}}</td>' +
    '        </tr>' +
    '    </table>' +
    '</el-dialog>',
};