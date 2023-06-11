import { member, Member, Component } from "../../../core";
    
    export interface ModalOverlayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowLerp?: member<number>;
AnimationTime?: member<number>;
SizeRoot?: member<any>;
ContentRoot?: member<any>;
CloseOnContextMenuAction?: member<boolean>;
    }
    
    export function ModalOverlay(props: ModalOverlayInput){
      const { id, persistentId, updateOrder, Enabled,
ShowLerp,
AnimationTime,
SizeRoot,
ContentRoot,
CloseOnContextMenuAction, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ModalOverlay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: 0 */  isRaw={typeof AnimationTime === "object" && "isRaw" in AnimationTime && AnimationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="SizeRoot" id={typeof SizeRoot === "object" && "id" in SizeRoot ? SizeRoot?.id : undefined} value={typeof SizeRoot === "object" && "value" in SizeRoot ? SizeRoot?.value : SizeRoot} /* default: ID0 */  isRaw={typeof SizeRoot === "object" && "isRaw" in SizeRoot && SizeRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="ContentRoot" id={typeof ContentRoot === "object" && "id" in ContentRoot ? ContentRoot?.id : undefined} value={typeof ContentRoot === "object" && "value" in ContentRoot ? ContentRoot?.value : ContentRoot} /* default: ID0 */  isRaw={typeof ContentRoot === "object" && "isRaw" in ContentRoot && ContentRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CloseOnContextMenuAction" id={typeof CloseOnContextMenuAction === "object" && "id" in CloseOnContextMenuAction ? CloseOnContextMenuAction?.id : undefined} value={typeof CloseOnContextMenuAction === "object" && "value" in CloseOnContextMenuAction ? CloseOnContextMenuAction?.value : CloseOnContextMenuAction} /* default: false */  isRaw={typeof CloseOnContextMenuAction === "object" && "isRaw" in CloseOnContextMenuAction && CloseOnContextMenuAction.isRaw ? true : undefined} />
        </Component>
      );
    };
    