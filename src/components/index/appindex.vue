<template>
  <div class="appindex">
    <div class="header-img">
      <div class="header-nav">
        <div>
          <citydropdown  @switchcity="switchcity"></citydropdown>
        </div>
        <navigationpops
        @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops">
        </navigationpops>
      </div>
      <inputSearch></inputSearch>
    </div>

  </div>
</template>

<script>
import navigationpops from '@/components/public/appPublic/navigationPops'
import citydropdown from '@/components/public/appPublic/citydropdown'
import inputSearch from '@/components/public/appPublic/inputSearch'

export default {
  name: 'Appindex',
  data () {
    return {
      pithOne: '0',
      pithcity: 0,
      indexObje: {},
      shownavigationpops: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    switchcity (itemObject) {
      this.pithcity = itemObject.index
    }
  },
  components: {
    navigationpops,
    citydropdown,
    inputSearch
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.appindex{
  height: 100%;
  .header-img {
    width: 100%;
    height:2.04rem;
    padding: .15rem;
    background: #ddd;
    .header-nav {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
