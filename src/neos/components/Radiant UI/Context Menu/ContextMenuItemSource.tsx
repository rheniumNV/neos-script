import { member, Member, Component } from "../../../core";
    
    export interface ContextMenuItemSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Label?: member<any>;
Color?: member<[number, number, number, number]>;
Sprite?: member<any>;
ButtonEnabled?: member<boolean>;
AllowDrag?: member<boolean>;
CloseMenuOnPress?: member<boolean>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
    }
    
    export function ContextMenuItemSource(props: ContextMenuItemSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Label,
Color,
Sprite,
ButtonEnabled,
AllowDrag,
CloseMenuOnPress,
Pressed,
Pressing,
Released, } = props;
    
      return (
        <Component type="FrooxEngine.ContextMenuItemSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: <i>null</i> */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.Sprite]]`} name="Sprite" id={typeof Sprite === "object" && "id" in Sprite ? Sprite?.id : undefined} value={typeof Sprite === "object" && "value" in Sprite ? Sprite?.value : Sprite} /* default: ID0 */  isRaw={typeof Sprite === "object" && "isRaw" in Sprite && Sprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ButtonEnabled" id={typeof ButtonEnabled === "object" && "id" in ButtonEnabled ? ButtonEnabled?.id : undefined} value={typeof ButtonEnabled === "object" && "value" in ButtonEnabled ? ButtonEnabled?.value : ButtonEnabled} /* default: false */  isRaw={typeof ButtonEnabled === "object" && "isRaw" in ButtonEnabled && ButtonEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowDrag" id={typeof AllowDrag === "object" && "id" in AllowDrag ? AllowDrag?.id : undefined} value={typeof AllowDrag === "object" && "value" in AllowDrag ? AllowDrag?.value : AllowDrag} /* default: false */  isRaw={typeof AllowDrag === "object" && "isRaw" in AllowDrag && AllowDrag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CloseMenuOnPress" id={typeof CloseMenuOnPress === "object" && "id" in CloseMenuOnPress ? CloseMenuOnPress?.id : undefined} value={typeof CloseMenuOnPress === "object" && "value" in CloseMenuOnPress ? CloseMenuOnPress?.value : CloseMenuOnPress} /* default: false */  isRaw={typeof CloseMenuOnPress === "object" && "isRaw" in CloseMenuOnPress && CloseMenuOnPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressed === "object" && "isRaw" in Pressed && Pressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressing === "object" && "isRaw" in Pressing && Pressing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Released === "object" && "isRaw" in Released && Released.isRaw ? true : undefined} />
        </Component>
      );
    };
    