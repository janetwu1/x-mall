<template>
  <div class="goods">
    <div class="nav">
      <div class="w">
        <a href="javascript:;"
        :class="{ active: i === isIndex}"
        v-for="(navItem,i) in navList"
        :key="i"
        @click="handleSort">
        {{ navItem.title }}
        </a>
        <div class="price-interval">
          <input type="number" class="input" placeholder="价格" v-model="min">
          <span style="margin: 0 5px">-</span>
          <input type="number" placeholder="价格" v-model="max">
          <el-button type="primary" size="small" style="margin-left: 10px;">确定</el-button>
        </div>
      </div>
    </div>
    <div>
      <div class="goods-box w">
        <mall-goods></mall-goods>
      </div>
      <div class="w">
        分页
      </div>
    </div>
  </div>
</template>

<script>
import MallGoods from "@/components/MallGoods"

export default {
  components: {
    MallGoods
  },
  data() {
    return {
      max: "",
      min: "",
      navList: [
        { title: '综合排序' },
        { title: '价格由高到低' },
        { title: '价格由低到高' }
      ],
      isIndex: 0,
      currentPage: 1,
      pageSize: 20,
      sort: ''
    }
  },
  created () {
    this.getAllGoods()
  },
  methods: {
    async getAllGoods() {
     const res = await this.$http.get(`/api/goods/allGoods?page=${this.currentPage}&size=${this.pageSize}&sort=${this.sort}&priceGt=${this.min}&priceLte=${this.max}`)
     console.log(res)
    },
    handleSort(i){
      this.isIndex = i
      switch (i) {
        case 0:
          // 综合排序
          break
        case 1:
          // 正序
          break  
        case 2:
          // 倒序
          break
        default:
          // 综合排序
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
@import "../../assets/style/theme";

.nav {
  height: 60px;
  line-height: 60px;
  > div {
    display: flex;
    align-items: center;
    a {
      padding: 0 30px 0 0;
      height: 100%;
      @extend %block-center;
      font-size: 12px;
      color: #999;
      &.active {
        color: #5683ea;
      }
      &:hover {
        color: #5683ea;
      }
    }
    input {
      @include wh(80px, 30px);
      border: 1px solid #ccc;
    }
    input + input {
      margin-left: 10px;
    }
  }
  .price-interval {
    padding: 0 15px;
    @extend %block-center;
    input[type="number"] {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
    }
  }
}

.goods-box {
  overflow: hidden;
  > div {
    float: left;
    border: 1px solid #efefef;
  }
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.img-item {
  display: flex;
  flex-direction: column;
}

.el-pagination {
  align-self: flex-end;
  margin: 3vw 10vw 2vw;
}

.section {
  padding-top: 8vw;
  margin-bottom: -5vw;
  width: 1218px;
  align-self: center;
}

.recommend {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}
</style>