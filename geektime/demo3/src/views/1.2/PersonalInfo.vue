<template>
  <div>
    <select
        :value="phoneInfo.areaCode"
        placeholder="区号"
        @change="handleAreaCodeChange">
          <option value="+86">+86</option>
          <option value="+60">+60</option>
    </select>
    <input
        type="number"
        :value="phoneInfo.phone"
        placeholder="手机号"
        @input="handlePhoneChange">
    <input
        :value="zipCode"
        type="number"
        placeholder="邮编"
        @input="handleZipCodeChange">
  </div>
</template>

<script>
  export default {
    name: "personal-info",
    model: {
      prop: 'phoneInfo', //默认value
      event: 'change'    //默认input
    },
    props: {
      phoneInfo: Object,
      zipCode: String
    },
    methods: {
      handleAreaCodeChange(e) {
        this.$emit('change', {
            ...this.phoneInfo,
          areaCode: e.target.value
        })
      },
      handlePhoneChange(e) {
        this.$emit('change', {
            ...this.phoneInfo,
          phone: e.target.value
        })
      },
      handleZipCodeChange(e) {
        this.$emit('update:zipCode', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>