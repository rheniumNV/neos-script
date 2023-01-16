import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OpenWorldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
URL?: member<any>;
WorldLink?: member<any>;
Relation?: member<any>;
GetExisting?: member<any>;
LoadingIndicator?: member<any>;
AutoFocus?: member<any>;
MakePrivate?: member<any>;
OnOpenStart?: member<any>;
OnOpenDone?: member<any>;
OnWorldReady?: member<any>;
OnOpenFail?: member<any>;
    }
    
    export function OpenWorld(props: OpenWorldInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
URL,
WorldLink,
Relation,
GetExisting,
LoadingIndicator,
AutoFocus,
MakePrivate,
OnOpenStart,
OnOpenDone,
OnWorldReady,
OnOpenFail, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldNodes.OpenWorld" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IWorldLink]`} name="WorldLink" id={typeof WorldLink === "object" && "id" in WorldLink ? WorldLink?.id : undefined} value={typeof WorldLink === "object" && "value" in WorldLink ? WorldLink?.value : WorldLink} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Userspace+WorldRelation]`} name="Relation" id={typeof Relation === "object" && "id" in Relation ? Relation?.id : undefined} value={typeof Relation === "object" && "value" in Relation ? Relation?.value : Relation} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="GetExisting" id={typeof GetExisting === "object" && "id" in GetExisting ? GetExisting?.id : undefined} value={typeof GetExisting === "object" && "value" in GetExisting ? GetExisting?.value : GetExisting} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="LoadingIndicator" id={typeof LoadingIndicator === "object" && "id" in LoadingIndicator ? LoadingIndicator?.id : undefined} value={typeof LoadingIndicator === "object" && "value" in LoadingIndicator ? LoadingIndicator?.value : LoadingIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="AutoFocus" id={typeof AutoFocus === "object" && "id" in AutoFocus ? AutoFocus?.id : undefined} value={typeof AutoFocus === "object" && "value" in AutoFocus ? AutoFocus?.value : AutoFocus} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="MakePrivate" id={typeof MakePrivate === "object" && "id" in MakePrivate ? MakePrivate?.id : undefined} value={typeof MakePrivate === "object" && "value" in MakePrivate ? MakePrivate?.value : MakePrivate} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnOpenStart" id={typeof OnOpenStart === "object" && "id" in OnOpenStart ? OnOpenStart?.id : undefined} value={typeof OnOpenStart === "object" && "value" in OnOpenStart ? OnOpenStart?.value : OnOpenStart} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnOpenDone" id={typeof OnOpenDone === "object" && "id" in OnOpenDone ? OnOpenDone?.id : undefined} value={typeof OnOpenDone === "object" && "value" in OnOpenDone ? OnOpenDone?.value : OnOpenDone} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWorldReady" id={typeof OnWorldReady === "object" && "id" in OnWorldReady ? OnWorldReady?.id : undefined} value={typeof OnWorldReady === "object" && "value" in OnWorldReady ? OnWorldReady?.value : OnWorldReady} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnOpenFail" id={typeof OnOpenFail === "object" && "id" in OnOpenFail ? OnOpenFail?.id : undefined} value={typeof OnOpenFail === "object" && "value" in OnOpenFail ? OnOpenFail?.value : OnOpenFail} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    