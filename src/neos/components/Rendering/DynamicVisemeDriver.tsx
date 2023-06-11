import { member, Member, Component } from "../../core";
    
    export interface DynamicVisemeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
MouthTrackingSource?: member<any>;
VoiceMouthSupressWeight?: member<number>;
Drivers?: member<any>;
    }
    
    export function DynamicVisemeDriver(props: DynamicVisemeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
MouthTrackingSource,
VoiceMouthSupressWeight,
Drivers, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicVisemeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VisemeAnalyzer]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="MouthTrackingSource" id={typeof MouthTrackingSource === "object" && "id" in MouthTrackingSource ? MouthTrackingSource?.id : undefined} value={typeof MouthTrackingSource === "object" && "value" in MouthTrackingSource ? MouthTrackingSource?.value : MouthTrackingSource} /* default: ID0 */  isRaw={typeof MouthTrackingSource === "object" && "isRaw" in MouthTrackingSource && MouthTrackingSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VoiceMouthSupressWeight" id={typeof VoiceMouthSupressWeight === "object" && "id" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.id : undefined} value={typeof VoiceMouthSupressWeight === "object" && "value" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.value : VoiceMouthSupressWeight} /* default: 0 */  isRaw={typeof VoiceMouthSupressWeight === "object" && "isRaw" in VoiceMouthSupressWeight && VoiceMouthSupressWeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicVisemeDriver+TargetDriver]`} name="Drivers" id={typeof Drivers === "object" && "id" in Drivers ? Drivers?.id : undefined} value={typeof Drivers === "object" && "value" in Drivers ? Drivers?.value : Drivers} /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicVisemeDriver+TargetDriver] */  isRaw={typeof Drivers === "object" && "isRaw" in Drivers && Drivers.isRaw ? true : undefined} />
        </Component>
      );
    };
    