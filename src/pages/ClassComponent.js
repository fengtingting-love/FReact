import React, {
    Component
} from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        // state 存储状态
        this.state = {
            date: new Date()
        }
    }
    // 组件挂载完成后执行的生命周期
    componentDidMount(){
        this.timer = setInterval(()=>{
            // 不能直接对state中的值进行修改，使用setState方法对其进行修改
            this.setState({
                date: new Date()
            })
        },1000)
    }
    // 组件卸载之前执行生命周期
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        const {date} = this.state
        return (
            <div>
                <h3> Class组件: 当前时间为 </h3>
                <p> {date.toLocaleTimeString()} </p>
            </div>
        )
    }
}