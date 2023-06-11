import { member, Member, Component } from "../../../core";
    
    export interface AvatarObjectScaleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UserSpaceScale?: member<[number, number, number]>;
    }
    
    export function AvatarObjectScale(props: AvatarObjectScaleInput){
      const { id, persistentId, updateOrder, Enabled,
UserSpaceScale, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarObjectScale" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="UserSpaceScale" id={typeof UserSpaceScale === "object" && "id" in UserSpaceScale ? UserSpaceScale?.id : undefined} value={typeof UserSpaceScale === "object" && "value" in UserSpaceScale ? UserSpaceScale?.value : UserSpaceScale} /* default: [0; 0; 0] */  isRaw={typeof UserSpaceScale === "object" && "isRaw" in UserSpaceScale && UserSpaceScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    