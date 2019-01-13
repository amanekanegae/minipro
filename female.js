function　btnLink() {
  var height = document.getElementById("height");
  var job = document.getElementById("job");
  var age = document.getElementById("age");

var name = document.getElementById("name");
var age1 = document.getElementById("age1");
var hobby = document.getElementById("hobby");
  if (height.value=="low" && job.value=="ko" && age.value=="teen") {
    name.innerHTML = "重盛涼太　さん"
    age1.innerHTML = "18歳"
    hobby.innerHTML = "ラーメン店巡り"
} else if (height.value=="low" && job.value=="sa" && age.value=="teen") {
    name.innerHTML = "薬師寺涼　さん"
    age1.innerHTML = "19歳"
    hobby.innerHTML = "ボルダリング"
}else if (height.value=="low" && job.value=="some" && age.value=="teen"){
  name.innerHTML ="佐藤祐太郎　さん"
  age1.innerHTML ="18歳"
  hobby.innerHTML ="温泉巡り"
}else if (height.value=="low" && job.value=="ko" && age.value=="young"){
name.innerHTML = "伊藤聖　さん"
age1.innerHTML = "21歳"
hobby.innerHTML ="お酒笑"
} else if (height.value=="low" && job.value=="sa" && age.value=="young"){
  name.innerHTML = "二階堂歩美　さん"
  age1.innerHTML = "35歳"
  hobby.innerHTML ="日本舞踊"
} else if (height.value=="low" && job.value=="some" && age.value=="young"){
  name.innerHTML = "吉村夏帆　さん"
  age1.innerHTML = "25歳"
  hobby.innerHTML ="球技全般"
}  else if (height.value=="low" && job.value=="ko" && age.value=="soso"){
    name.innerHTML = "廣中美羽　さん"
    age1.innerHTML = "25歳"
    hobby.innerHTML ="朱印集め"
  }  else if (height.value=="low" && job.value=="sa" && age.value=="soso"){
      name.innerHTML = "渡邊梨々香　さん"
      age1.innerHTML = "39歳"
      hobby.innerHTML ="パワーストーン"
    }  else if (height.value=="low" && job.value=="some" && age.value=="soso"){
        name.innerHTML = "工藤愛花　さん"
        age1.innerHTML = "37歳"
        hobby.innerHTML ="華道"

}else if(height.value=="standard" && job.value=="ko" && age.value=="teen"){
  name.innerHTML = "上田さゆり　さん"
  age1.innerHTML = "19歳"
  hobby.innerHTML = "料理"
} else if (height.value=="standard" && job.value=="ko" && age.value=="soso") {
  name.innerHTML = "佐藤優樹菜　さん"
  age1.innerHTML = "32歳"
  hobby.innerHTML = "茶道"
}else if(height.value=="standard" && job.value=="ko" && age.value=="young"){
  name.innerHTML = "中村美智香　さん"
  age1.innerHTML = "26歳"
  hobby.innerHTML = "コーヒー"
}else if(height.value=="standard" && job.value=="sa" && age.value=="teen"){
  name.innerHTML = "末永恵　さん"
  age1.innerHTML = "18歳"
  hobby.innerHTML = "コーヒーとJazz"
}else if(height.value=="standard" && job.value=="sa" && age.value=="young"){
    name.innerHTML = "坂下愛梨　さん"
    age1.innerHTML = "26歳"
    hobby.innerHTML = "ガーデニング"
}else if(height.value=="standard" && job.value=="sa" && age.value=="soso"){
      name.innerHTML = "蓮実直美　さん"
      age1.innerHTML = "38歳"
      hobby.innerHTML = "百人一首"
    }else if(height.value=="standard" && job.value=="some" && age.value=="teen"){
          name.innerHTML = "蓮実絢香　さん"
          age1.innerHTML = "19歳"
          hobby.innerHTML = "ケーキ作り"
        }else if(height.value=="standard" && job.value=="some" && age.value=="young"){
              name.innerHTML = "吉田結衣　さん"
              age1.innerHTML = "27歳"
              hobby.innerHTML = "神社巡り"
            }else if(height.value=="standard" && job.value=="some" && age.value=="soso"){
                  name.innerHTML = "竹下春菜　さん"
                  age1.innerHTML = "33歳"
                  hobby.innerHTML = "総合格闘技"

                }else if(height.value=="high" && job.value=="ko" && age.value=="teen"){
                      name.innerHTML = "村山晴香　さん"
                      age1.innerHTML = "16歳"
                      hobby.innerHTML = "バレーボール"
                    }else if(height.value=="high" && job.value=="ko" && age.value=="young"){
                          name.innerHTML = "磯日加奈　さん"
                          age1.innerHTML = "21歳"
                          hobby.innerHTML = "パンケーキ"
                        }else if(height.value=="high" && job.value=="ko" && age.value=="soso"){
                              name.innerHTML = "野田葵　さん"
                              age1.innerHTML = "31歳"
                              hobby.innerHTML = "野球観戦"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="teen"){
                              name.innerHTML = "中島心優　さん"
                              age1.innerHTML = "18歳"
                              hobby.innerHTML = "バイオリン"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="young"){
                                name.innerHTML = "烏谷美里　さん"
                                age1.innerHTML = "28歳"
                                hobby.innerHTML = "海外旅行"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="soso"){
                                  name.innerHTML = "小林千尋　さん"
                                  age1.innerHTML = "33歳"
                                  hobby.innerHTML = "クラリネット"
                                }else if(height.value=="high" && job.value=="some" && age.value=="teen"){
                                      name.innerHTML = "横井咲　さん"
                                      age1.innerHTML = "19歳"
                                      hobby.innerHTML = "猫"
                                    }else if(height.value=="high" && job.value=="some" && age.value=="young"){
                                          name.innerHTML = "川口くるみ　さん"
                                          age1.innerHTML = "23歳"
                                          hobby.innerHTML = "映画鑑賞"
                                        }else if(height.value=="high" && job.value=="some" && age.value=="soso"){
                                              name.innerHTML = "竹村花　さん"
                                              age1.innerHTML = "37歳"
                                              hobby.innerHTML = "絶叫系！！"
                                            }
}
