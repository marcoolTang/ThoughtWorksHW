import {observable, action, runInAction} from 'mobx';
import fetch from '../services/fetch.js';
// import { getAgentList } from '../config/api.js';
// import {_getType, _getStatus } from '../utils/utils.js';

class store  {
	@observable data = null;
	@observable expectedData = {
		rawData: [],
		types:{},
		status:{},
	}
   	@observable state = true;
    @action initData = async () => {
        try {
            const data = await fetch.get('http://localhost:3001/agents')

            runInAction("说明一下这个action是干什么的。不写也可以", () => {
                this.state = false;
                this.data = data;
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