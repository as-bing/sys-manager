<template>
  <el-row>
    <el-col :span="4">
      <el-menu @select="selectMenu">
        <el-submenu v-for="(submenus, index) in menus" :index="index + 1+''" :key="submenus.index">
          <template slot="title">{{submenus.title}}</template>
         <el-menu-item v-for="(item, subIndex) in submenus.children"
           :index="(index + 1) + '-' + (subIndex + 1)" :key="(index + 1) + '-' + (subIndex + 1)">
             {{item.title}}
         </el-menu-item>
       </el-submenu>
     </el-menu>
    </el-col>
    <el-col :span="20"></el-col>
  </el-row> 
</template>

<script>
  // // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        menus: [{
          title: 'home',
          children: [{
            title: 'test1',
            children:[
              {
                title:'test1-1'
              }
            ]
          },
          {
            title: 'test2'
          }]
        }]
      }
    },
    methods: {
      selectMenu(index, indexPath) {
        console.log(index, indexPath);
      }
    }
  }
</script>
