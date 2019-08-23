<template>
  <div>
    我是Vip
    <picker :slots="slots" @change="onValuesChange" rotate-effect :visible-item-count="3">
      <!-- Toolbar items -->
      <button>confirm</button>
      <button>cancel</button>
    </picker>
  </div>
</template>

<script>
  import { Picker } from 'mint-ui';
  export default {
    name: "vip",
    components: {
      Picker
    },
    methods: {
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      }
    },
    data() {
      return {
        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
