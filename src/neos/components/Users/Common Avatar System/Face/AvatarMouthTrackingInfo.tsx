import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="MouthDataSource" id={typeof MouthDataSource === "object" && "id" in MouthDataSource ? MouthDataSource?.id : undefined} value={typeof MouthDataSource === "object" && "value" in MouthDataSource ? MouthDataSource?.value : MouthDataSource} /* default: ID0 */  />
        </Component>
      );
    };
    