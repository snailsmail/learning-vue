<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <a-tabs>

      <a-tab-pane key="props" tab="属性">
        <Props
        name="Hello Vue!"
        :type="type"
        :is-visible="false"
        :on-change="handlePropChange"
        title="属性Demo"
        class="test1"
        :class="['test2']"
        :style="{marginTop: '20px'}"
        style="margin-top: 10px"
        ></Props>
      </a-tab-pane>

      <a-tab-pane key="event" tab="事件">
          <Event :name="name" @change="handleEventChange"></Event>
      </a-tab-pane>

      <a-tab-pane key="slot" tab="插槽">
        <h2>2.6新语法</h2>
        <SlotDemo>
          <p>default slot</p>
          <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
          </template>
          <template v-slot:title="props">
            <p>title slot3 {{props}}</p>
            <p>title slot4 {{props}}</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{props}}</p>
          </template>
        </SlotDemo>
        <br>
        <h2>老语法</h2>
        <SlotDemo>
          <p>default slot</p>
          <p slot="title">title slot1</p>
          <p slot="title">title slot2</p>
          <p slot="title" slot-scope="prop">title slot3 {{prop}}</p>
          <p slot="title" slot-scope="props">title slot4 {{props}}</p>
          <p slot="item" slot-scope="props">item slot-scope {{props}}</p>
        </SlotDemo>
      </a-tab-pane>

      <a-tab-pane key="bigProps" tab="大属性">
        <BigProps
            :name="bigPropsName"
            :on-change="handleBigPropChange"
            :slot-default="getDefault()"
            :slot-title="getTitle()"
            :slot-scope-item="getItem"
        ></BigProps>
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script>
  import Props from './Props'
  import Event from './Event'
  import SlotDemo from './Slot'
  import BigProps from './BigProps'
  export default {
    components: {
      Props,
      Event,
      SlotDemo,
      BigProps
    },
    data: () => {
      return {
        name: '',
        type: 'success',
        bigPropsName: 'hello world'
      }
    },
    methods: {
      handlePropChange (val) {
        this.type = val;
      },
      handleEventChange(val) {
        this.name = val;
      },
      handleBigPropChange(val) {
        this.bigPropsName = val;
      },
      getDefault() {
        return [this.$createElement('p', 'default slot')];
      },
      getTitle() {
        return [
            this.$createElement('p', 'title slot1'),
            this.$createElement('p', 'title slot2')
        ]
      },
      getItem(props) {
        return [
            this.$createElement('p', `item slot-scope ${JSON.stringify(props)}`)
        ]
      }
    }
  }
</script>

<style scoped>

</style>