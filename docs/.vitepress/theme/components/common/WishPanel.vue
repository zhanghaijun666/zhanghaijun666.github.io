<template>
  <div class="wish-panel" v-show="data.length">
    <div class="tips">
      <div><i class="circle"></i> <span>规划中</span></div>
      <div><i class="circle start"></i> <span>开发中</span></div>
      <div><i class="circle end"></i> <span>已上线</span></div>
    </div>
    <ul>
      <li v-for="d in showData" :key="d.id">
        <hr />
        <div class="wish">
          <div class="content">
            <div class="title">
              <i class="circle" :class="d.status" /> <span>{{ d.title }}</span>
            </div>
            <div class="des">
              <span>{{ d.des }}</span>
            </div>
          </div>
          <el-button type="primary" @click="praise(d.id, d.alreadyPraise)">
            <el-icon> <Flag /> </el-icon> {{ d.count }}票
          </el-button>
        </div>
      </li>
      <!-- 已上线 -->
      <li><hr /></li>
      <details class="details custom-block">
        <summary>💐 已处理完毕的反馈归档 💐</summary>
        <li v-for="d in successData" :key="d.id">
          <hr />
          <div class="wish">
            <div class="content">
              <div class="title">
                <i class="circle" :class="d.status" />
                <span>{{ d.title }}</span>
              </div>
              <div class="des">
                <span>{{ d.des }}</span>
              </div>
            </div>
            <el-button type="primary" @click="praise(d.id, d.alreadyPraise)">
              <el-icon>
                <Flag />
              </el-icon>
              {{ d.count }}票
            </el-button>
          </div>
        </li>
      </details>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive } from 'vue';
import { ElButton, ElIcon, ElMessage } from 'element-plus';
import { Flag } from '@element-plus/icons-vue';

const enum WishStatus {
  REVIEW /** 审核中   */,
  WAIT /** 待开始   */,
  START /** 开发中   */,
  END /* 已上线   */,
  CLOSE /** 关闭   */,
}

const data = reactive<any[]>([]);

const showData = computed(() => data.map((v) => ({ ...v, status: WishStatus[v.status].toLowerCase() })).filter((v) => v.status !== 'end'));
const successData = computed(() => data.map((v) => ({ ...v, status: WishStatus[v.status].toLowerCase() })).filter((v) => v.status === 'end'));

const praise = (id: string, alreadyPraise: boolean) => {
  if (alreadyPraise) {
    ElMessage.error('你已经投过票了');
    return;
  }
  console.log(data.find((v) => v.id === id));
  ElMessage.success('投票成功');
};

onMounted(() => {
  data.push(
    ...[
      {
        title: '任务支持多个账号共享查看数据',
        des: '任务可以多个账号共享或者提供一个实时查看收集文件情况的页面',
        id: '63259945245e1761c7273f75',
        startDate: '2022-10-10T14:53:00.627Z',
        count: 43,
        alreadyPraise: false,
        status: 2,
      },
      {
        title: '(已上线) 增加限制提交文件类型的能力',
        des: '比如常见图片，视频，压缩文件格式等等',
        id: '62b2891c6ccf2c7d0234a216',
        startDate: '2022-09-12T13:16:15.016Z',
        count: 26,
        alreadyPraise: false,
        status: 3,
      },
      {
        title: '(已上线) 文件下载优化',
        des: '记录下载文件的历史，批量文件的下载不用在页面等待归档',
        id: '62b6a31a1e08cc1ba4ab3b6b',
        startDate: '2022-08-14T08:11:44.104Z',
        count: 19,
        alreadyPraise: false,
        status: 3,
      },
      {
        title: '服务器数据备份&恢复',
        des: '支持随时导出服务器数据然后导入到其它服务器',
        id: '62f8aebe1e08cc1ba4ab7fa9',
        count: 10,
        alreadyPraise: false,
        status: 1,
      },
      {
        title: '有人提交就推送消息',
        des: '追加有人提交就推送消息的功能',
        id: '631efbc412c67d3062a6cdd7',
        startDate: '2023-12-15T14:01:41.112Z',
        count: 10,
        alreadyPraise: true,
        status: 2,
      },
      {
        title: '(已上线) 未填写人员名单',
        des: '可以快捷导出或查看未填写表单人员名单\n\n📢-----开发者回复-----📢\n这个功能是一直都有的，在任务的设置面板，有个限制提交人员的功能。开启后就有相关统计了',
        id: '635805b88f0639220f7c5b47',
        count: 7,
        alreadyPraise: false,
        status: 3,
      },
      {
        title: '增加在线审阅、评分的网盘功能',
        des: '大部分收集场景的后续任务，不仅仅是收集，收集word、PDF、视频等还需评阅，甚至评分。目前本人遇到的困难点是收集完后，还要耗费大量时间去上传至云盘，再新建各个作品的分享链接给评委、教师。其实已经存在七牛云上的视频和稿件，如果再开发一个对接的简易分享云盘，能有简单的免登录或密码分享功能（评分功能可能更奢求了），将是解决了最后一公里，绝杀了。',
        id: '6535173256c3ab256dfd8b2c',
        count: 0,
        alreadyPraise: false,
        status: 1,
      },
    ]
  );
});
</script>
<style lang="scss" scoped>
.wish-panel {
  ul {
    list-style: none;
  }

  .wish {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;

    .content {
      display: flex;
      flex-direction: column;
      max-width: 70%;

      .title {
        display: flex;
        align-items: center;
      }

      .des {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }

  .circle {
    display: inline-block;
    background-color: #f5222d;
    min-width: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;

    &.end {
      background-color: #52c41a;
    }

    &.start {
      background-color: #1890ff;
    }
  }

  .tips {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
  }
}
</style>
