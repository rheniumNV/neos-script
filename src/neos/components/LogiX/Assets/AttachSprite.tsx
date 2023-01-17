import { member, Member, Component } from "../../../core";
    
    export interface AttachSpriteInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
URL?: member<any>;
Target?: member<any>;
GetExisting?: member<any>;
OnAttached?: member<any>;
    }
    
    export function AttachSprite(props: AttachSpriteInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
URL,
Target,
GetExisting,
OnAttached, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.AttachSprite" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="GetExisting" id={typeof GetExisting === "object" && "id" in GetExisting ? GetExisting?.id : undefined} value={typeof GetExisting === "object" && "value" in GetExisting ? GetExisting?.value : GetExisting} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnAttached" id={typeof OnAttached === "object" && "id" in OnAttached ? OnAttached?.id : undefined} value={typeof OnAttached === "object" && "value" in OnAttached ? OnAttached?.value : OnAttached} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    