import React from 'react';
import '../../css/common.css';
import './Home.css';
import { common } from '../../utils/config';
import { Button, message } from 'antd';
let startX,startY,moveEndX,moveEndY;
let TouchState;
class Home extends React.Component {
    constructor(props){
        super()
        this.state={
            map:[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            max:2
        }
    }
    randomPutNum=(f)=>{
        let data=[]
        data=this.getSpace()
        if(data.length===0){
            message.info("游戏结束!:"+Math.pow(2,this.state.max+1))
            return 
        }
        let k = data[(new Date().getTime())%data.length]
        let i=parseInt(k/4)
        let j=k%4
        //if(f)console.log(i,j)
        let num = this.state.max>16?4:2
        if(this.state.map[i][j]===0)
            this.setItem(i,j,num)
        else{
            this.randomPutNum(false)
        }
    }
    getSpace=()=>{
        let data=[]
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(this.state.map[i][j]===0)
                    data.push(i*4+j)
            }
        }
        return data
    }
    restart=()=>{
        this.setState({map:[
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],max:2})
        setTimeout(()=>{this.randomPutNum(true)},50)
        setTimeout(()=>{this.saveState()},100)
    }
    saveState=()=>{
        localStorage.setItem("2048data",JSON.stringify(this.state.map))
        localStorage.setItem("2048dataMax",this.state.max.toString())
    }
    getState=()=>{
        this.setState({map:JSON.parse(localStorage.getItem("2048data"))})
        this.setState({max:parseInt(localStorage.getItem("2048dataMax"))})
    }
    componentDidMount(){
        if(!localStorage.getItem("2048dataMax")){
            this.randomPutNum(true)
        }
        else{
            this.getState()
        }
        window.addEventListener("keydown",e=>{
            switch(e.key){
                case "ArrowDown":
                    this.handleMapDown()
                    break
                case "ArrowUp":
                    this.handleMapUp()
                    break
                case "ArrowLeft":
                    this.handleMapLeft()
                    break
                case "ArrowRight":
                    this.handleMapRight()
                    break
                default:
                    console.log(e.key)
                    break
            }
            this.randomPutNum(true)
            setTimeout(()=>{this.saveState()},50)
        })
    }
    handleMapRight=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[i][0],map[i][1],map[i][2],map[i][3]]
            let s=3
            let check=-1
            for(let k=0;k<4;k++){
                let f=3-k
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]+=1
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s-=1
                }
            }
            for(let l = s;l>=0;l--){
                Data[l]=0
            }
            map[i][0]=Data[0]
            map[i][1]=Data[1]
            map[i][2]=Data[2]
            map[i][3]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapLeft=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[i][0],map[i][1],map[i][2],map[i][3]]
            let s=0
            let check=-1
            for(let k=0;k<4;k++){
                let f=k
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]+=1
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s+=1
                }
            }
            for(let l = s;l<4;l++){
                Data[l]=0
            }
            map[i][0]=Data[0]
            map[i][1]=Data[1]
            map[i][2]=Data[2]
            map[i][3]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapUp=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[0][i],map[1][i],map[2][i],map[3][i]]
            let s=0
            let check=-1
            for(let k=0;k<4;k++){
                let f=k
                
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]+=1
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s+=1
                }
            }
            for(let l = s;l<4;l++){
                Data[l]=0
            }
            map[0][i]=Data[0]
            map[1][i]=Data[1]
            map[2][i]=Data[2]
            map[3][i]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapDown=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[0][i],map[1][i],map[2][i],map[3][i]]
            let s=3
            let check=-1
            for(let k=0;k<4;k++){
                let f=3-k
                
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]+=1;
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s-=1
                }
            }
            for(let l = s;l>=0;l--){
                Data[l]=0
            }
            map[0][i]=Data[0]
            map[1][i]=Data[1]
            map[2][i]=Data[2]
            map[3][i]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    itemToDiv=(item,key)=>(
        <div className="ccFlexColumn" style={{width:56,height:56,background:common.divInfo[item].bgColor,color:common.divInfo[item].color,borderRadius:12,fontSize:30,fontWeight:"bold"}}>
            {item===0?null:Math.pow(2,item-1)}
        </div>
    )
    setItem(i,j,k){
        let {map}=this.state
        map[i][j]=k
        this.setState({map:map})
    }
    lineToDiv=(item,key)=>(
        <div className="bcFlexRow" style={{width:240,height:56,padding:"0px 5.3333px"}} key={"line_"+key}>
            {item.map(this.itemToDiv)}
        </div>
    )
    touchstart=()=>{
        let e = window.event;
        // e.preventDefault();
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        TouchState=0;
    }
    touchmove=(item)=>{
        let e = window.event;
        // e.preventDefault(); // 阻止浏览器默认事件
        moveEndX = e.targetTouches[0].pageX;
        moveEndY = e.targetTouches[0].pageY;
        let X = moveEndX - startX;
        let Y = moveEndY - startY;
        
        if (Math.abs(X) > 60&&X>0){  
            if(TouchState===0)TouchState=1;
            this.handleMapRight()
        } 
        else if (Math.abs(X) > 60&&X<0){
            if(TouchState===0)TouchState=1;
            this.handleMapLeft()
        }
        else if (Math.abs(Y) > 60&&Y>0){  
            if(TouchState===0)TouchState=1;
            this.handleMapDown()
        } 
        else if (Math.abs(Y) > 60&&Y<0){
            if(TouchState===0)TouchState=1;
            this.handleMapUp()
        }
        
    }
    touchEnd=()=>{
        if(TouchState===1){
            this.randomPutNum(true) 
            //TouchState=2;
        }
    }
    render(){
        return (
            <div className="OutSide ccFlexColumn" style={{background:"#efefef"}} onTouchStart={this.touchstart} onTouchMove={this.touchmove} onTouchEnd={this.touchEnd}>
                <div className="bcFlexColumn" style={{width:240,height:240,background:"#bbada0",borderTopLeftRadius:20,borderTopRightRadius:20,padding:16/3}}>
                    {this.state.map.map(this.lineToDiv)}
                </div>
                <div className="ccFlexRow" style={{width:240,height:40,background:"#ffffff",borderBottomLeftRadius:20,borderBottomRightRadius:20,padding:16/3}}>
                    <div className="ccFlexRow" style={{width:120}}>
                        最大值：{Math.pow(2,this.state.max-1)}
                    </div>
                    <div className="ccFlexRow" style={{width:40}}>
                        <Button type="link" onClick={()=>{this.restart()}}>重置</Button>
                    </div>
                </div>
            </div>
          );
    }
}
export default Home;