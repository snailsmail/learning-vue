<template>
  <div id="grandson">
    <h3>Grandson2</h3>
    <p>
      祖先元素提供的数据：{{son}}
    </p>
  </div>
</template>

<script>
	export default {
		name: "grandson2",
    inject: ['son']
	}
</script>

<style scoped>
#grandson {
  border: 3px solid #ff0000;
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>