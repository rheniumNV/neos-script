import { member, Member, Component } from "../../../core";
    
    export interface NeosUIStyleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Color?: member<[number, number, number, number]>;
UserParentedColor?: member<[number, number, number, number]>;
PrivateColor?: member<[number, number, number, number]>;
    }
    
    export function NeosUIStyle(props: NeosUIStyleInput){
      const { id, persistentId, updateOrder, Enabled,
Color,
UserParentedColor,
PrivateColor, } = props;
    
      return (
        <Component type="FrooxEngine.NeosUIStyle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="UserParentedColor" id={typeof UserParentedColor === "object" && "id" in UserParentedColor ? UserParentedColor?.id : undefined} value={typeof UserParentedColor === "object" && "value" in UserParentedColor ? UserParentedColor?.value : UserParentedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="PrivateColor" id={typeof PrivateColor === "object" && "id" in PrivateColor ? PrivateColor?.id : undefined} value={typeof PrivateColor === "object" && "value" in PrivateColor ? PrivateColor?.value : PrivateColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    