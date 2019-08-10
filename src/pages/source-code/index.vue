<template>
  <div class="code-page">
    <pre>
      Vue 初始化过程：new Vue(options) -> 执行构造函数 _init()方法 初始化vue实例  初始化内容包含以下内容 执行以下一系列方法
      1、initLifecycle()：
                          在该实例上挂载一系列状态属性：_watcher
                                              _inactive
                                              _directInactive
                                              _isMounted
                                              _isDestroyed
                                              _isBingDestroyed
      2、initEvents():
                          初始化监听事件，如: vm.$on(eventType, callback)
      3、initRender()
      4、callHook('beforeCreate') 此时 执行 beforeCreate 生命周期函数
      5、initInjections() 初始化 injections 属性
      6、initState: 初始化一系列属性包含：
                                  props -> initProps()
                                  methods -> initMethods()
                                  data -> initData()
                                  computed -> initComputed()
                                  watch -> initWatch()
      7、initProvide() 初始化 provide  (特别说明：provide, inject必须成对出现，provide在父组件声明，inject在子组件声明用于获取父组建的provide的值)
      8、callHook('created') 此时 执行 created 生命周期函数
                            可以拿到 实例上的 props, methods, data上的属性, conputed, watch
      9、执行$mount() 计算方法 得到 template模版 然后解析该模版
        模版解析完成后 调用 mountComponent()  在该函数中对 vm.$el 赋值 后并执行 beforeMount 生命周期函数
        模版解析过程中，会主动触发 defineReactive$$1 里面 Object.defineProperty 定义的get方法，此过程会将该 key push进 dep依赖里面
        在 触发set 方法时 会从依赖dep对象里面取出 watcher 执行更新操作
      10、在执行beforeMount() (vm, el, hydrating)后 实例化 new Watcher(vm, ...) 并将 该watch 作为
          vm._watcher = watch 一个属性并且 vm._watchers.push(watch)
      11、初始化 watch = new Watcher()后 立即执行Watcher 原型上的get()方法
          并将该watch push进全局的targetStack 即调用全局方法 pushTarget(target)
      12、一系列操作后，执行 updateComponent()方法 -> 即去渲染该组建 vm.render()
      13、render()方法中 根据虚拟vnode 创建真实dom，并挂在到页面上，并且将原dom移除了，完成后执行 vm.mounted() 周期函数
    </pre>
    <pre>
      vue 在做依赖收集的步骤：
      将 var mount = Vue.prototype.$mount 暂存  再给Vue.prototype.$mount 重新赋值
      1、Vue.prototype.$mount: 在第二个 $mount方法中 -> 执行compileToFunctions 方法 得到 render()方法
      2、反向执行 第一个 Vue.prototype.$mount：即  return mount.call(this, el, hydrating) 在 该方法中，
      调用 Wather 构造函数 生成 监听对象，该监听对象在 构造函数中 调用 Watcher原型上的get方法
      3、在get方法中, 首先将 生成的watcher实例 放进全局的 Dep.target中, 然后调用 第二步生成的监听实例上的getter方法 即 执行 mountComponent 中的
      updateComponent 方法 实质上 就是调用vm._update(vm._render(), hydrating); Vue实例上的 render方法
      4、执行 render() 方法 获取 绑定的值，此时会触发 在defineReactive$$ 方法中 Object.defineProperty 定义的  get方法；在执行get方法的过程中 进行 依赖收集
      即dep.depend() 此时如果Dep.target存在 那么就调用该对象的上方法 => 实质上是调用 Watcher原型上的 Watcher.prototype.addDep 方法 将 第二步 生成的 watcher实例 添加进去
    </pre>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .code-page{
    text-align: left;
  }
</style>
