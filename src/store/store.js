import {observable, action, runInAction} from 'mobx';
import fetch from '../services/fetch.js';
// import { getAgentList } from '../config/api.js';
// import {_getType, _getStatus } from '../utils/utils.js';

class store  {
	@observable data = null;
   	@observable state = true;
   	@observable parseData = [];
    @action initData = async () => {
        try {
            const data = await fetch.get('http://localhost:3001/agents')

            runInAction("说明一下这个action是干什么的。不写也可以", () => {
                this.state = false;
                this.data = data;
                this.parseData = JSON.parse(data)
            })
        } catch (error) {
            runInAction(() => {
                this.state = "error"
            })
        }
        
    };
    @action loadingSpin(){
    	this.state = true;
    }
    @action.bound toggleAddResourceBox(id){
        //使用action.bound能把this绑定到这个store实例，否则这里传过来的this是catalog的实例
        // console.log(this.parseData,id)
    	this.parseData.map((item,index) =>{
            //如果这个点了这个id，就显示这个id, 其他全部隐藏
    		if(item.id === id){
    			item.display = true
    		}else{
    			item.display = false
    		}
    		return item
    	})
       
    }
    @action.bound closeAddResouceBox(id){
        //使用action.bound能把this绑定到这个store实例，否则这里传过来的this是catalog的实例
        console.log(this.parseData,id)
        this.parseData.map((item,index) =>{
            //如果这个点了这个id， 就给这个id隐藏
            if(item.id === id){
                item.display = false
            }
            return item
        })
       
    }
    // @action changeToggeSwitch (){
    // 	this.toggleSwitch.push()
    // }

 	
		// fetch.get(getAgentList).then((res)=>{
		// 	let resJson = JSON.parse(res)
		// 	//console.log(resJson)

		// 	let types = _getType(resJson)
		// 	let status = _getStatus(resJson)

		// 	return this.rawData = {
		// 		rawData:resJson,
		// 		types:types,
		// 		status:status,
		// 	}
		// })
	
}

export default new store() 