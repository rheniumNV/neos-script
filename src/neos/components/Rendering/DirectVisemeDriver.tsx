import { member, Member, Component } from "../../core";
    
    export interface DirectVisemeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
MouthTrackingSource?: member<any>;
StrengthMultiplier?: member<number>;
VoiceMouthSupressWeight?: member<number>;
LaughThreshold?: member<number>;
LaughBeginSpeed?: member<number>;
LaughEndSpeed?: member<number>;
Silence?: member<any>;
PP?: member<any>;
FF?: member<any>;
TH?: member<any>;
DD?: member<any>;
kk?: member<any>;
CH?: member<any>;
SS?: member<any>;
nn?: member<any>;
RR?: member<any>;
aa?: member<any>;
E?: member<any>;
ih?: member<any>;
oh?: member<any>;
ou?: member<any>;
Laugh?: member<any>;
    }
    
    export function DirectVisemeDriver(props: DirectVisemeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
MouthTrackingSource,
StrengthMultiplier,
VoiceMouthSupressWeight,
LaughThreshold,
LaughBeginSpeed,
LaughEndSpeed,
Silence,
PP,
FF,
TH,
DD,
kk,
CH,
SS,
nn,
RR,
aa,
E,
ih,
oh,
ou,
Laugh, } = props;
    
      return (
        <Component type="FrooxEngine.DirectVisemeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder} version={3}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VisemeAnalyzer]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="MouthTrackingSource" id={typeof MouthTrackingSource === "object" && "id" in MouthTrackingSource ? MouthTrackingSource?.id : undefined} value={typeof MouthTrackingSource === "object" && "value" in MouthTrackingSource ? MouthTrackingSource?.value : MouthTrackingSource} /* default: ID0 */  isRaw={typeof MouthTrackingSource === "object" && "isRaw" in MouthTrackingSource && MouthTrackingSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrengthMultiplier" id={typeof StrengthMultiplier === "object" && "id" in StrengthMultiplier ? StrengthMultiplier?.id : undefined} value={typeof StrengthMultiplier === "object" && "value" in StrengthMultiplier ? StrengthMultiplier?.value : StrengthMultiplier} /* default: 0 */  isRaw={typeof StrengthMultiplier === "object" && "isRaw" in StrengthMultiplier && StrengthMultiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VoiceMouthSupressWeight" id={typeof VoiceMouthSupressWeight === "object" && "id" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.id : undefined} value={typeof VoiceMouthSupressWeight === "object" && "value" in VoiceMouthSupressWeight ? VoiceMouthSupressWeight?.value : VoiceMouthSupressWeight} /* default: 0 */  isRaw={typeof VoiceMouthSupressWeight === "object" && "isRaw" in VoiceMouthSupressWeight && VoiceMouthSupressWeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LaughThreshold" id={typeof LaughThreshold === "object" && "id" in LaughThreshold ? LaughThreshold?.id : undefined} value={typeof LaughThreshold === "object" && "value" in LaughThreshold ? LaughThreshold?.value : LaughThreshold} /* default: 0 */  isRaw={typeof LaughThreshold === "object" && "isRaw" in LaughThreshold && LaughThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LaughBeginSpeed" id={typeof LaughBeginSpeed === "object" && "id" in LaughBeginSpeed ? LaughBeginSpeed?.id : undefined} value={typeof LaughBeginSpeed === "object" && "value" in LaughBeginSpeed ? LaughBeginSpeed?.value : LaughBeginSpeed} /* default: 0 */  isRaw={typeof LaughBeginSpeed === "object" && "isRaw" in LaughBeginSpeed && LaughBeginSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LaughEndSpeed" id={typeof LaughEndSpeed === "object" && "id" in LaughEndSpeed ? LaughEndSpeed?.id : undefined} value={typeof LaughEndSpeed === "object" && "value" in LaughEndSpeed ? LaughEndSpeed?.value : LaughEndSpeed} /* default: 0 */  isRaw={typeof LaughEndSpeed === "object" && "isRaw" in LaughEndSpeed && LaughEndSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="Silence" id={typeof Silence === "object" && "id" in Silence ? Silence?.id : undefined} value={typeof Silence === "object" && "value" in Silence ? Silence?.value : Silence} /* default: ID0 */  isRaw={typeof Silence === "object" && "isRaw" in Silence && Silence.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="PP" id={typeof PP === "object" && "id" in PP ? PP?.id : undefined} value={typeof PP === "object" && "value" in PP ? PP?.value : PP} /* default: ID0 */  isRaw={typeof PP === "object" && "isRaw" in PP && PP.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="FF" id={typeof FF === "object" && "id" in FF ? FF?.id : undefined} value={typeof FF === "object" && "value" in FF ? FF?.value : FF} /* default: ID0 */  isRaw={typeof FF === "object" && "isRaw" in FF && FF.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="TH" id={typeof TH === "object" && "id" in TH ? TH?.id : undefined} value={typeof TH === "object" && "value" in TH ? TH?.value : TH} /* default: ID0 */  isRaw={typeof TH === "object" && "isRaw" in TH && TH.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="DD" id={typeof DD === "object" && "id" in DD ? DD?.id : undefined} value={typeof DD === "object" && "value" in DD ? DD?.value : DD} /* default: ID0 */  isRaw={typeof DD === "object" && "isRaw" in DD && DD.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="kk" id={typeof kk === "object" && "id" in kk ? kk?.id : undefined} value={typeof kk === "object" && "value" in kk ? kk?.value : kk} /* default: ID0 */  isRaw={typeof kk === "object" && "isRaw" in kk && kk.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="CH" id={typeof CH === "object" && "id" in CH ? CH?.id : undefined} value={typeof CH === "object" && "value" in CH ? CH?.value : CH} /* default: ID0 */  isRaw={typeof CH === "object" && "isRaw" in CH && CH.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="SS" id={typeof SS === "object" && "id" in SS ? SS?.id : undefined} value={typeof SS === "object" && "value" in SS ? SS?.value : SS} /* default: ID0 */  isRaw={typeof SS === "object" && "isRaw" in SS && SS.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="nn" id={typeof nn === "object" && "id" in nn ? nn?.id : undefined} value={typeof nn === "object" && "value" in nn ? nn?.value : nn} /* default: ID0 */  isRaw={typeof nn === "object" && "isRaw" in nn && nn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="RR" id={typeof RR === "object" && "id" in RR ? RR?.id : undefined} value={typeof RR === "object" && "value" in RR ? RR?.value : RR} /* default: ID0 */  isRaw={typeof RR === "object" && "isRaw" in RR && RR.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="aa" id={typeof aa === "object" && "id" in aa ? aa?.id : undefined} value={typeof aa === "object" && "value" in aa ? aa?.value : aa} /* default: ID0 */  isRaw={typeof aa === "object" && "isRaw" in aa && aa.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="E" id={typeof E === "object" && "id" in E ? E?.id : undefined} value={typeof E === "object" && "value" in E ? E?.value : E} /* default: ID0 */  isRaw={typeof E === "object" && "isRaw" in E && E.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="ih" id={typeof ih === "object" && "id" in ih ? ih?.id : undefined} value={typeof ih === "object" && "value" in ih ? ih?.value : ih} /* default: ID0 */  isRaw={typeof ih === "object" && "isRaw" in ih && ih.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="oh" id={typeof oh === "object" && "id" in oh ? oh?.id : undefined} value={typeof oh === "object" && "value" in oh ? oh?.value : oh} /* default: ID0 */  isRaw={typeof oh === "object" && "isRaw" in oh && oh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="ou" id={typeof ou === "object" && "id" in ou ? ou?.id : undefined} value={typeof ou === "object" && "value" in ou ? ou?.value : ou} /* default: ID0 */  isRaw={typeof ou === "object" && "isRaw" in ou && ou.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="Laugh" id={typeof Laugh === "object" && "id" in Laugh ? Laugh?.id : undefined} value={typeof Laugh === "object" && "value" in Laugh ? Laugh?.value : Laugh} /* default: ID0 */  isRaw={typeof Laugh === "object" && "isRaw" in Laugh && Laugh.isRaw ? true : undefined} />
        </Component>
      );
    };
    