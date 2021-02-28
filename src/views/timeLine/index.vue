<template>
  <div class="timeline">
    <div class="timeline-container">
      <div class="timeline-wrapper">
        <div class="timeline-list">
          <div class="timeline-item">
            <div class="year">2020</div>
            <div class="year-wrapper">
              <div class="year-item">
                <span class="date">11-01</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">09-01</span
                ><span class="title">React与组件化</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">07-04</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">05-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2019</div>
            <div class="year-wrapper">
              <div class="year-item">
                <span class="date">11-01</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">09-01</span
                ><span class="title">React与组件化</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">07-04</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">05-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2018</div>
            <div class="year-wrapper">
              <div class="year-item">
                <span class="date">11-01</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">09-01</span
                ><span class="title">React与组件化</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">08-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">07-04</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
              <div class="year-item">
                <span class="date">05-14</span
                ><span class="title">go使用gorm2连接sqlite3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Template from './components/Template'
// import Api from '@/api'
export default {
  name: 'TimeLine', // small&camel
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.timeline {
  min-height: calc(100vh - 350px);
  background: linear-gradient(to bottom right, #fff0f5, #bfefff);
  z-index: 1;
  padding-top: 60px;

  .timeline-container {
    width: 1200px;
    margin: 50px auto 0;
    background: #ffffff;
    padding-bottom: 100px;

    .timeline-wrapper {
      width: 800px;
      margin: 0 auto;
      .timeline-list {
        // height: 100px;
        height: 500px;
        height: 100%;
        width: 100%;
        // display: flex;
        margin-top: 10px;
        // flex-wrap: wrap;
        .timeline-item {
          // font-family: STSong;
          width: 100%;
          padding: 10px 0 10px;
          .year {
            font-family: STSong;
            margin: 80px 0 0;
            color: #555;
            font-weight: 700;
            font-size: 30px;
            &:before {
              content: ' ';
              position: absolute;
              z-index: 2;
              left: -19px;
              top: 50%;
              margin-left: -4px;
              margin-top: -4px;
              width: 8px;
              height: 8px;
              background: #ddd;
              border-radius: 50%;
            }
          }
          .year-wrapper {
            .year-item {
              display: flex;
              padding: 30px 0 10px;
              list-style: none;
              border-bottom: 1px dashed #ccc;
              position: relative;
              .date {
                font-family: STSong;
                width: 40px;
                line-height: 30px;
                color: #555;
                font-size: 18px;
                &:before {
                  content: ' ';
                  position: absolute;
                  left: -19px;
                  top: 41px;
                  width: 6px;
                  height: 6px;
                  margin-left: -4px;
                  background: #ddd;
                  border-radius: 50%;
                  border: 1px solid #fff;
                  z-index: 2;
                }
              }
              .title {
                line-height: 30px;
                color: #555;
                font-size: 17px;
                cursor: pointer;
                margin-left: 40px;
              }
            }
          }
          // margin-bottom: 50px;
          // cursor: pointer;
          // background: #ffffff;
          // height: 25px;
          // display: flex;
          // color: #666;
          // align-items: center;
          // padding: 8px 20px;
          // margin: 5px 10px;
          // font-size: 15px;
          // border-radius: 5px;
          // box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
          // color: #fff;
          &.active {
            // color: #ffffff;
            // background: #2196f3;
            // .num {
            //   color: #2196f3;
            //   background: #ffffff;
            //   // background: #858585;
            // }
          }

          .num {
            // margin-left: 10px;
            // font-size: 13px;
            // border-radius: 5px;
            // background: #eee;
            // padding: 3px 8px;
            // background: #858585;
          }
        }
      }
      .list {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        .list-item {
          height: 210px;
          width: calc(100% - 40px);
          // margin: 50px 0;
          // border-radius: 5px;
          border-bottom: 1px solid #eee;
          background: #ffffff;
          padding: 30px 20px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          .left {
            width: 64%;
            padding-left: 20px;
            position: relative;
            .title {
              color: #333 !important;
              text-align: left;
              font-size: 25px;
              cursor: pointer;
              font-family: STSong;
              font-weight: 900;
            }
            .info {
              // margin-top: 30px;
              position: absolute;
              bottom: 10px;
              display: flex;

              cursor: pointer;
              color: #858585;
              font-size: 15px;
              .item {
                margin: 0 10px;
              }
              .iconfont {
                margin-right: 8px;
              }
            }
            .abstract {
              margin-top: 30px;
              text-align: left;
              font-family: Tahoma, Helvetica, Arial, '宋体', sans-serif;
              line-height: 30px;
              font-size: 16px;
            }
          }
          .right {
            width: 33%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            .image-wrapper {
              width: 90%;
              height: 100%;
              .blog-image {
                width: 100%;
                height: 100%;
                border-radius: 5px;
              }
            }
          }
        }
        .paging {
          margin-top: 50px;
          width: calc(100% - 40px);
          height: 50px;
          background: #ffffff;
          padding: 0 20px;
          border-radius: 0 0 5px 5px;
          display: flex;
          justify-content: space-between;
          .paging-item {
            height: 100%;
            display: flex;
            align-items: center;
          }
          .last {
            margin-left: 100px;
          }
          .center {
            font-family: Helvetica, Arial, '宋体', sans-serif;
          }
          .next {
            margin-right: 100px;
          }
          .last,
          .next {
            font-size: 15px;
            cursor: pointer;
          }
        }
      }

      .siderbar {
        // width: 30%;
        height: 100%;
        // border: 1px solid red;
      }
    }
  }
}
</style>
