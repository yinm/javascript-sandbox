// https://dev.classmethod.jp/etc/concrete-example-of-json/

const json = `[
  {
    "InstanceId": "i-XXXXXXXX",
    "ImageId": "ami-YYYYYYYY",
    "LaunchTime": "2015-05-28T08:30:10.000Z",
    "Tags": [
      {
        "Value": "portnoydev-emr",
        "Key": "Name"
      },
      {
        "Value": "j-ZZZZZZZZZZZZ",
        "Key": "aws:elasticmapreduce:job-flow-id"
      },
      {
        "Value": "CORE",
        "Key": "aws:elasticmapreduce:instance-group-role"
      }
    ]
  },
  {
    "InstanceId": "i-zzzzzzzzzzz",
    "ImageId": "ami-YYYYYYYY",
    "LaunchTime": "2015-05-28T08:30:10.000Z",
    "Tags": [
      {
        "Value": "portnoydev-emr",
        "Key": "Name"
      },
      {
        "Value": "j-ZZZZZZZZZZZZ",
        "Key": "aws:elasticmapreduce:job-flow-id"
      },
      {
        "Value": "CORE",
        "Key": "aws:elasticmapreduce:instance-group-role"
      }
    ]
  }
]`

parsedJson = JSON.parse(json)
console.log(parsedJson)
console.log('---------------------------')
console.log(parsedJson[0])
console.log('---------------------------')
console.log(parsedJson[1])
console.log('---------------------------')

console.log(parsedJson[0].InstanceId)
console.log(parsedJson[1].InstanceId)
console.log(parsedJson[0]['InstanceId'])
console.log(parsedJson[1]['InstanceId'])
