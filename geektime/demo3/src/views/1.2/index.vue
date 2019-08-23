<template xmlns:>
  <div>
    <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode"></PersonalInfo>

    <PersonalInfo
    :phone-info="phoneInfo"
    :zip-code="zipCode"
    @change="val => (phoneInfo = val)"
    @update:zipCode="val => (zipCode = val)">
    </PersonalInfo>

    phoneInfo:  {{phoneInfo}}
    <br>
    zipCode:  {{zipCode}}
  </div>
</template>

<script>
  import PersonalInfo from './PersonalInfo'
  export default {
    name: "index",
    components: {
      PersonalInfo
    },
    data() {
      return {
        phoneInfo: {
          areaCode: '+86',
          phone: ''
        },
        zipCode: ''
      }
    }
  }
</script>

<style scoped>

</style>