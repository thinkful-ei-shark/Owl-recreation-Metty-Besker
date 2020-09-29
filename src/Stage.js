import React from 'react'


function newStage(props){ 
    
    let image = <img src={props.avatar}/>;

    let popStage = (<div>
        <h3>{props.name}</h3>
        <div>
            {image}
        </div>
    </div>);

        if(props.inSession && props.onStage){
            {popStage}
          
}else{
    console.log()


}

        }


        export default newStage;
    