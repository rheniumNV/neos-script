import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DynamicVisemeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
MouthTrackingSource?: member<any>;
VoiceMouthSupressWeight?: member<number>;
    }
    
    export function DynamicVisemeDriver(props: DynamicVisemeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
MouthTrackingSource,
VoiceMouthSupressWeight, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicVisemeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VisemeAnalyzer]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="MouthTrackingSource" id={typeof MouthTrackingSource === "object" && "id" in MouthTrackingSource ? MouthTrackingSource?.id : undefined} value={typeof MouthTrackingSource === "object" && "value" in MouthTrackingSource ? MouthTrackingSource?.value : MouthTrackingSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VoiceMouthSupressWeight" id={typeof VoiceMouthSupressWeight === "object" && "id" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.id : undefined} value={typeof VoiceMouthSupressWeight === "object" && "value" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.value : VoiceMouthSupressWeight} /* default: 0 */  />
        </Component>
      );
    };
    