import { member, Member, Component } from "../../../core";
    
    export interface RenderToTextureAssetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Camera?: member<any>;
Resolution?: member<any>;
Format?: member<any>;
Quality?: member<any>;
OnRendered?: member<any>;
    }
    
    export function RenderToTextureAsset(props: RenderToTextureAssetInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Camera,
Resolution,
Format,
Quality,
OnRendered, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Rendering.RenderToTextureAsset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Camera]`} name="Camera" id={typeof Camera === "object" && "id" in Camera ? Camera?.id : undefined} value={typeof Camera === "object" && "value" in Camera ? Camera?.value : Camera} /* default: ID0 */  isRaw={typeof Camera === "object" && "isRaw" in Camera && Camera.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int2]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: ID0 */  isRaw={typeof Resolution === "object" && "isRaw" in Resolution && Resolution.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: ID0 */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Quality" id={typeof Quality === "object" && "id" in Quality ? Quality?.id : undefined} value={typeof Quality === "object" && "value" in Quality ? Quality?.value : Quality} /* default: ID0 */  isRaw={typeof Quality === "object" && "isRaw" in Quality && Quality.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnRendered" id={typeof OnRendered === "object" && "id" in OnRendered ? OnRendered?.id : undefined} value={typeof OnRendered === "object" && "value" in OnRendered ? OnRendered?.value : OnRendered} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnRendered === "object" && "isRaw" in OnRendered && OnRendered.isRaw ? true : undefined} />
        </Component>
      );
    };
    