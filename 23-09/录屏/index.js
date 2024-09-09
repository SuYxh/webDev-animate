const fileBtn = document.getElementById('file')

fileBtn.addEventListener('change', (e) => {
  const formData = new FormData()
  formData.append('file', e.target.files[0])
  fetch('http://api.yinchunyu.com/common/upload', {
    method: 'POST',
    body: formData
  }).then(res => {
    return res.json();
  }).then(res => {
    console.log('res is',res);
  })
})





function base64toFile(base64Data) {
  //去掉base64的头部信息，并转换为byte
  let split = base64Data.split(',');
  let bytes = window.atob(split[1]);
  //获取文件类型
  let fileType = split[0].match(/:(.*?);/)[1];
  //处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: fileType});
}
