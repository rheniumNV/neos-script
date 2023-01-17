import { member, Member, Component } from "../../core";
    
    export interface WorldSubmitterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GroupId?: member<any>;
Radius?: member<number>;
Height?: member<number>;
_visual?: member<any>;
    }
    
    export function WorldSubmitter(props: WorldSubmitterInput){
      const { id, persistentId, updateOrder, Enabled,
GroupId,
Radius,
Height,
_visual, } = props;
    
      return (
        <Component type="FrooxEngine.WorldSubmitter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="GroupId" id={typeof GroupId === "object" && "id" in GroupId ? GroupId?.id : undefined} value={typeof GroupId === "object" && "value" in GroupId ? GroupId?.value : GroupId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visual" id={typeof _visual === "object" && "id" in _visual ? _visual?.id : undefined} value={typeof _visual === "object" && "value" in _visual ? _visual?.value : _visual} /* default: ID0 */  />
        </Component>
      );
    };
    