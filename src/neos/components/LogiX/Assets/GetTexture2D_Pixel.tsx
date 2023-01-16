import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GetTexture2D_PixelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Texture?: member<any>;
Position?: member<any>;
MipLevel?: member<any>;
    }
    
    export function GetTexture2D_Pixel(props: GetTexture2D_PixelInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Texture,
Position,
MipLevel, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.GetTexture2D_Pixel" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int2]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="MipLevel" id={typeof MipLevel === "object" && "id" in MipLevel ? MipLevel?.id : undefined} value={typeof MipLevel === "object" && "value" in MipLevel ? MipLevel?.value : MipLevel} /* default: ID0 */  />
        </Component>
      );
    };
    