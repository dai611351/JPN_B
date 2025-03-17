let job={
  id:(1),
  name:"developer",
  describe:"là người phát triển phần mềm",
  time:"thời gian bắt đầu",
  status:"tình trạng công việc"
}
let jobs=[];
let choice;
do{
  console.log("1. Thêm công việc mới");
  console.log("2. Hiển thị danh sách công việc");
  console.log("3. cập nhập trạng thái công việc theo id");
  console.log("4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.");
  console.log("5. Sắp xếp các công việc theo trạng thái công việc.");
  console.log("6. Thoát");
  choice=+prompt("Nhập lựa chọn của bạn");
  switch(choice){
      case 1:
          addJob(jobs);
          break;
      case 2:
          showJobs(jobs);
          break;
      case 3:
          updateJob(jobs);
          break;
      case 4:
          deleteJob(jobs);
          break;
      case 5:
          sortJob(jobs);
          break;
      case 6:
          console.log("Thoát chương trình.");
          break;
      default:
          console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
          break;
  }
}while(choice!=6);

function addJob(jobs){
  let job={};
  job.id=jobs.length+1;
  job.name=prompt("Nhập tên công việc");
  job.describe=prompt("Nhập mô tả công việc");
  job.time=prompt("Nhập thời gian bắt đầu");
  job.status=prompt("Nhập tình trạng công việc");
  jobs.push(job);
  console.log("Đã thêm công việc thành công.");
}

function showJobs(jobs){
  if(jobs.length===0){
      console.log("Danh sách công việc trống.");
  }else{
      console.log("Danh sách công việc:");
      console.table(jobs);
  }
}
function updateJob(jobs){
  let id=+prompt("Nhập id công việc cần cập nhập");
  let job=jobs.find(function(job){
      return job.id===id;
  });
  if(job){
      job.status=prompt("Nhập tình trạng công việc");
      console.log("Cập nhập thành công.");
  }else{
      console.log("Không tìm thấy công việc");
  }
}
function deleteJob(jobs){
  let status=prompt("Nhập tình trạng công việc cần lọc");
  let result=jobs.filter(function(job){
      return job.status===status;
  });
  if(result.length>0){
      console.log("Kết quả tìm kiếm:",result);
  }else{
      console.log("Không tìm thấy công việc");
  }
}
function sortJob(jobs){
  jobs.sort(function(a,b){
      return a.status.localeCompare(b.status);
  });
  console.log("Danh sách công việc sau khi sắp xếp:");
  console.table(jobs);
}