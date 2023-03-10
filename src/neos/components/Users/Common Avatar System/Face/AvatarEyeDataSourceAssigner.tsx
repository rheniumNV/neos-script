import { member, Member, Component } from "../../../../core";
    
    export interface AvatarEyeDataSourceAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetReference?: member<any>;
    }
    
    export function AvatarEyeDataSourceAssigner(props: AvatarEyeDataSourceAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
TargetReference, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarEyeDataSourceAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncRef\`1[FrooxEngine.IEyeDataSourceComponent]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: ID0 */  />
        </Component>
      );
    };
    