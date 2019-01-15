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
name.innerHTML = "中山匠　さん"
age1.innerHTML = "21歳"
hobby.innerHTML ="ディズニー"
} else if (height.value=="low" && job.value=="sa" && age.value=="young"){
  name.innerHTML = "仲本翔　さん"
  age1.innerHTML = "35歳"
  hobby.innerHTML ="読書"
} else if (height.value=="low" && job.value=="some" && age.value=="young"){
  name.innerHTML = "竹本伊織　さん"
  age1.innerHTML = "27歳"
  hobby.innerHTML ="釣り"
}  else if (height.value=="low" && job.value=="ko" && age.value=="soso"){
    name.innerHTML = "坂下翼　さん"
    age1.innerHTML = "28歳"
    hobby.innerHTML ="プログラミング"
  }  else if (height.value=="low" && job.value=="sa" && age.value=="soso"){
      name.innerHTML = "渡邊大河　さん"
      age1.innerHTML = "39歳"
      hobby.innerHTML ="古着"
    }  else if (height.value=="low" && job.value=="some" && age.value=="soso"){
        name.innerHTML = "宇野睦月　さん"
        age1.innerHTML = "37歳"
        hobby.innerHTML ="ゴルフ"

}else if(height.value=="standard" && job.value=="ko" && age.value=="teen"){
  name.innerHTML = "白石裕太　さん"
  age1.innerHTML = "19歳"
  hobby.innerHTML = "剣道"
} else if (height.value=="standard" && job.value=="ko" && age.value=="soso") {
  name.innerHTML = "尾崎祐介　さん"
  age1.innerHTML = "32歳"
  hobby.innerHTML = "柔道"
}else if(height.value=="standard" && job.value=="ko" && age.value=="young"){
  name.innerHTML = "中村楓　さん"
  age1.innerHTML = "26歳"
  hobby.innerHTML = "大河ドラマ"
}else if(height.value=="standard" && job.value=="sa" && age.value=="teen"){
  name.innerHTML = "橋爪智樹　さん"
  age1.innerHTML = "18歳"
  hobby.innerHTML = "Rap クラブに通うこと"
}else if(height.value=="standard" && job.value=="sa" && age.value=="young"){
    name.innerHTML = "竹之下航　さん"
    age1.innerHTML = "26歳"
    hobby.innerHTML = "ドラマ鑑賞"
}else if(height.value=="standard" && job.value=="sa" && age.value=="soso"){
      name.innerHTML = "蓮実秀太　さん"
      age1.innerHTML = "38歳"
      hobby.innerHTML = "歌舞伎を観ること"
    }else if(height.value=="standard" && job.value=="some" && age.value=="teen"){
          name.innerHTML = "蓮実蓮　さん"
          age1.innerHTML = "19歳"
          hobby.innerHTML = "熱闘風呂"
        }else if(height.value=="standard" && job.value=="some" && age.value=="young"){
              name.innerHTML = "仲本鉄平　さん"
              age1.innerHTML = "27歳"
              hobby.innerHTML = "SASUKE"
            }else if(height.value=="standard" && job.value=="some" && age.value=="soso"){
                  name.innerHTML = "山本吉斗　さん"
                  age1.innerHTML = "33歳"
                  hobby.innerHTML = "総合格闘技"

                }else if(height.value=="high" && job.value=="ko" && age.value=="teen"){
                      name.innerHTML = "山田邦彦　さん"
                      age1.innerHTML = "17歳"
                      hobby.innerHTML = "ボーリング"
                    }else if(height.value=="high" && job.value=="ko" && age.value=="young"){
                          name.innerHTML = "半沢直人　さん"
                          age1.innerHTML = "21歳"
                          hobby.innerHTML = "カラオケ"
                        }else if(height.value=="high" && job.value=="ko" && age.value=="soso"){
                              name.innerHTML = "君島邦夫　さん"
                              age1.innerHTML = "31歳"
                              hobby.innerHTML = "野球観戦"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="teen"){
                              name.innerHTML = "仙道新　さん"
                              age1.innerHTML = "18歳"
                              hobby.innerHTML = "ピアノと抹茶"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="young"){
                                name.innerHTML = "猫島啓介　さん"
                                age1.innerHTML = "28歳"
                                hobby.innerHTML = "サーフィン"
                            }else if(height.value=="high" && job.value=="sa" && age.value=="soso"){
                                  name.innerHTML = "瀬戸康史　さん"
                                  age1.innerHTML = "33歳"
                                  hobby.innerHTML = "合気道"
                                }else if(height.value=="high" && job.value=="some" && age.value=="teen"){
                                      name.innerHTML = "横手悟　さん"
                                      age1.innerHTML = "19歳"
                                      hobby.innerHTML = "サッカー"
                                    }else if(height.value=="high" && job.value=="some" && age.value=="young"){
                                          name.innerHTML = "西山司さん"
                                          age1.innerHTML = "23歳"
                                          hobby.innerHTML = "バレーボールの選手やってます！"
                                        }else if(height.value=="high" && job.value=="some" && age.value=="soso"){
                                              name.innerHTML = "奥村京　さん"
                                              age1.innerHTML = "37歳"
                                              hobby.innerHTML = "走り幅跳びやってます！"
                                            }
}
