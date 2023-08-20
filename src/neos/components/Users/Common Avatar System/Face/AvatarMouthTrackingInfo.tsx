import { member, Member, Component } from "../../../../core";
    
    export interface AvatarMouthTrackingInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MouthDataSource?: member<any>;
    }
    
    export function AvatarMouthTrackingInfo(props: AvatarMouthTrackingInfoInput){
      const { id, persistentId, updateOrder, Enabled,
MouthDataSource, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarMouthTrackingInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="MouthDataSource" id={typeof MouthDataSource === "object" && "id" in MouthDataSource ? MouthDataSource?.id : undefined} value={typeof MouthDataSource === "object" && "value" in MouthDataSource ? MouthDataSource?.value : MouthDataSource} /* default: ID0 */  isRaw={typeof MouthDataSource === "object" && "isRaw" in MouthDataSource && MouthDataSource.isRaw ? true : undefined} />
        </Component>
      );
    };
    