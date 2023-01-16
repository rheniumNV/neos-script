import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface StaticAudioClipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
LoadMode?: member<any>;
SampleRateMode?: member<any>;
    }
    
    export function StaticAudioClip(props: StaticAudioClipInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
LoadMode,
SampleRateMode, } = props;
    
      return (
        <Component type="FrooxEngine.StaticAudioClip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioLoadMode]`} name="LoadMode" id={typeof LoadMode === "object" && "id" in LoadMode ? LoadMode?.id : undefined} value={typeof LoadMode === "object" && "value" in LoadMode ? LoadMode?.value : LoadMode} /* default: Automatic */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SampleRateMode]`} name="SampleRateMode" id={typeof SampleRateMode === "object" && "id" in SampleRateMode ? SampleRateMode?.id : undefined} value={typeof SampleRateMode === "object" && "value" in SampleRateMode ? SampleRateMode?.value : SampleRateMode} /* default: Original */  />
        </Component>
      );
    };
    