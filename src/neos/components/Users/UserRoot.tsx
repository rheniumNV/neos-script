import { member, Member, Component } from "../../core";
    
    export interface UserRootInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RenderSettings?: member<any>;
ScreenController?: member<any>;
OverrideRoot?: member<any>;
OverrideView?: member<any>;
OverrideEars?: member<any>;
    }
    
    export function UserRoot(props: UserRootInput){
      const { id, persistentId, updateOrder, Enabled,
RenderSettings,
ScreenController,
OverrideRoot,
OverrideView,
OverrideEars, } = props;
    
      return (
        <Component type="FrooxEngine.UserRoot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IRenderSettingsSource]`} name="RenderSettings" id={typeof RenderSettings === "object" && "id" in RenderSettings ? RenderSettings?.id : undefined} value={typeof RenderSettings === "object" && "value" in RenderSettings ? RenderSettings?.value : RenderSettings} /* default: ID0 */  isRaw={typeof RenderSettings === "object" && "isRaw" in RenderSettings && RenderSettings.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScreenController]`} name="ScreenController" id={typeof ScreenController === "object" && "id" in ScreenController ? ScreenController?.id : undefined} value={typeof ScreenController === "object" && "value" in ScreenController ? ScreenController?.value : ScreenController} /* default: ID0 */  isRaw={typeof ScreenController === "object" && "isRaw" in ScreenController && ScreenController.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideRoot" id={typeof OverrideRoot === "object" && "id" in OverrideRoot ? OverrideRoot?.id : undefined} value={typeof OverrideRoot === "object" && "value" in OverrideRoot ? OverrideRoot?.value : OverrideRoot} /* default: ID0 */  isRaw={typeof OverrideRoot === "object" && "isRaw" in OverrideRoot && OverrideRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideView" id={typeof OverrideView === "object" && "id" in OverrideView ? OverrideView?.id : undefined} value={typeof OverrideView === "object" && "value" in OverrideView ? OverrideView?.value : OverrideView} /* default: ID0 */  isRaw={typeof OverrideView === "object" && "isRaw" in OverrideView && OverrideView.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideEars" id={typeof OverrideEars === "object" && "id" in OverrideEars ? OverrideEars?.id : undefined} value={typeof OverrideEars === "object" && "value" in OverrideEars ? OverrideEars?.value : OverrideEars} /* default: ID0 */  isRaw={typeof OverrideEars === "object" && "isRaw" in OverrideEars && OverrideEars.isRaw ? true : undefined} />
        </Component>
      );
    };
    