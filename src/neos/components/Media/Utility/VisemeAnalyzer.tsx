import { member, Member, Component } from "../../../core";
    
    export interface VisemeAnalyzerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
RemoteSource?: member<any>;
Smoothing?: member<number>;
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
LaughterProbability?: member<any>;
    }
    
    export function VisemeAnalyzer(props: VisemeAnalyzerInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
RemoteSource,
Smoothing,
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
LaughterProbability, } = props;
    
      return (
        <Component type="FrooxEngine.VisemeAnalyzer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MultiValueStream\`1[System.Single]]`} name="RemoteSource" id={typeof RemoteSource === "object" && "id" in RemoteSource ? RemoteSource?.id : undefined} value={typeof RemoteSource === "object" && "value" in RemoteSource ? RemoteSource?.value : RemoteSource} /* default: ID0 */  isRaw={typeof RemoteSource === "object" && "isRaw" in RemoteSource && RemoteSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothing" id={typeof Smoothing === "object" && "id" in Smoothing ? Smoothing?.id : undefined} value={typeof Smoothing === "object" && "value" in Smoothing ? Smoothing?.value : Smoothing} /* default: 0 */  isRaw={typeof Smoothing === "object" && "isRaw" in Smoothing && Smoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Silence" id={typeof Silence === "object" && "id" in Silence ? Silence?.id : undefined} value={typeof Silence === "object" && "value" in Silence ? Silence?.value : Silence} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof Silence === "object" && "isRaw" in Silence && Silence.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="PP" id={typeof PP === "object" && "id" in PP ? PP?.id : undefined} value={typeof PP === "object" && "value" in PP ? PP?.value : PP} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof PP === "object" && "isRaw" in PP && PP.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="FF" id={typeof FF === "object" && "id" in FF ? FF?.id : undefined} value={typeof FF === "object" && "value" in FF ? FF?.value : FF} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof FF === "object" && "isRaw" in FF && FF.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="TH" id={typeof TH === "object" && "id" in TH ? TH?.id : undefined} value={typeof TH === "object" && "value" in TH ? TH?.value : TH} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof TH === "object" && "isRaw" in TH && TH.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="DD" id={typeof DD === "object" && "id" in DD ? DD?.id : undefined} value={typeof DD === "object" && "value" in DD ? DD?.value : DD} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof DD === "object" && "isRaw" in DD && DD.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="kk" id={typeof kk === "object" && "id" in kk ? kk?.id : undefined} value={typeof kk === "object" && "value" in kk ? kk?.value : kk} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof kk === "object" && "isRaw" in kk && kk.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CH" id={typeof CH === "object" && "id" in CH ? CH?.id : undefined} value={typeof CH === "object" && "value" in CH ? CH?.value : CH} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof CH === "object" && "isRaw" in CH && CH.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="SS" id={typeof SS === "object" && "id" in SS ? SS?.id : undefined} value={typeof SS === "object" && "value" in SS ? SS?.value : SS} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof SS === "object" && "isRaw" in SS && SS.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="nn" id={typeof nn === "object" && "id" in nn ? nn?.id : undefined} value={typeof nn === "object" && "value" in nn ? nn?.value : nn} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof nn === "object" && "isRaw" in nn && nn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RR" id={typeof RR === "object" && "id" in RR ? RR?.id : undefined} value={typeof RR === "object" && "value" in RR ? RR?.value : RR} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof RR === "object" && "isRaw" in RR && RR.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="aa" id={typeof aa === "object" && "id" in aa ? aa?.id : undefined} value={typeof aa === "object" && "value" in aa ? aa?.value : aa} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof aa === "object" && "isRaw" in aa && aa.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="E" id={typeof E === "object" && "id" in E ? E?.id : undefined} value={typeof E === "object" && "value" in E ? E?.value : E} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof E === "object" && "isRaw" in E && E.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="ih" id={typeof ih === "object" && "id" in ih ? ih?.id : undefined} value={typeof ih === "object" && "value" in ih ? ih?.value : ih} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof ih === "object" && "isRaw" in ih && ih.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="oh" id={typeof oh === "object" && "id" in oh ? oh?.id : undefined} value={typeof oh === "object" && "value" in oh ? oh?.value : oh} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof oh === "object" && "isRaw" in oh && oh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="ou" id={typeof ou === "object" && "id" in ou ? ou?.id : undefined} value={typeof ou === "object" && "value" in ou ? ou?.value : ou} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof ou === "object" && "isRaw" in ou && ou.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LaughterProbability" id={typeof LaughterProbability === "object" && "id" in LaughterProbability ? LaughterProbability?.id : undefined} value={typeof LaughterProbability === "object" && "value" in LaughterProbability ? LaughterProbability?.value : LaughterProbability} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof LaughterProbability === "object" && "isRaw" in LaughterProbability && LaughterProbability.isRaw ? true : undefined} />
        </Component>
      );
    };
    