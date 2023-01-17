import { member, Member, Component } from "../../../../core";
    
    export interface AvatarEyeTrackingInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EyeDataSource?: member<any>;
    }
    
    export function AvatarEyeTrackingInfo(props: AvatarEyeTrackingInfoInput){
      const { id, persistentId, updateOrder, Enabled,
EyeDataSource, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarEyeTrackingInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IEyeDataSourceComponent]`} name="EyeDataSource" id={typeof EyeDataSource === "object" && "id" in EyeDataSource ? EyeDataSource?.id : undefined} value={typeof EyeDataSource === "object" && "value" in EyeDataSource ? EyeDataSource?.value : EyeDataSource} /* default: ID0 */  />
        </Component>
      );
    };
    