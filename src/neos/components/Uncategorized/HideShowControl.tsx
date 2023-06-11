import { member, Member, Component } from "../../core";
    
    export interface HideShowControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
ShownPosition?: member<number>;
HiddenPosition?: member<number>;
_button?: member<any>;
_shown?: member<boolean>;
_downArrow?: member<any>;
_upArrow?: member<any>;
    }
    
    export function HideShowControl(props: HideShowControlInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
ShownPosition,
HiddenPosition,
_button,
_shown,
_downArrow,
_upArrow, } = props;
    
      return (
        <Component type="BusinessX.HideShowControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShownPosition" id={typeof ShownPosition === "object" && "id" in ShownPosition ? ShownPosition?.id : undefined} value={typeof ShownPosition === "object" && "value" in ShownPosition ? ShownPosition?.value : ShownPosition} /* default: 0 */  isRaw={typeof ShownPosition === "object" && "isRaw" in ShownPosition && ShownPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HiddenPosition" id={typeof HiddenPosition === "object" && "id" in HiddenPosition ? HiddenPosition?.id : undefined} value={typeof HiddenPosition === "object" && "value" in HiddenPosition ? HiddenPosition?.value : HiddenPosition} /* default: 0 */  isRaw={typeof HiddenPosition === "object" && "isRaw" in HiddenPosition && HiddenPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  isRaw={typeof _button === "object" && "isRaw" in _button && _button.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_shown" id={typeof _shown === "object" && "id" in _shown ? _shown?.id : undefined} value={typeof _shown === "object" && "value" in _shown ? _shown?.value : _shown} /* default: false */  isRaw={typeof _shown === "object" && "isRaw" in _shown && _shown.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_downArrow" id={typeof _downArrow === "object" && "id" in _downArrow ? _downArrow?.id : undefined} value={typeof _downArrow === "object" && "value" in _downArrow ? _downArrow?.value : _downArrow} /* default: ID0 */  isRaw={typeof _downArrow === "object" && "isRaw" in _downArrow && _downArrow.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_upArrow" id={typeof _upArrow === "object" && "id" in _upArrow ? _upArrow?.id : undefined} value={typeof _upArrow === "object" && "value" in _upArrow ? _upArrow?.value : _upArrow} /* default: ID0 */  isRaw={typeof _upArrow === "object" && "isRaw" in _upArrow && _upArrow.isRaw ? true : undefined} />
        </Component>
      );
    };
    