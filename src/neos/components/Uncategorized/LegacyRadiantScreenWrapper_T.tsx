import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LegacyRadiantScreenWrapper_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Icon?: member<any>;
ActiveColor?: member<[number, number, number, number]>;
Label?: member<any>;
_screenRoot?: member<any>;
_screenCanvas?: member<any>;
_modalOverlayManager?: member<any>;
ExtraSidePadding?: member<number>;
Background?: member<[number, number, number, number]>;
_initialized?: member<boolean>;
InitializeComponent?: member<any>;
ButtonGenerated?: member<any>;
    }
    
    export function LegacyRadiantScreenWrapper_T(props: LegacyRadiantScreenWrapper_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Icon,
ActiveColor,
Label,
_screenRoot,
_screenCanvas,
_modalOverlayManager,
ExtraSidePadding,
Background,
_initialized,
InitializeComponent,
ButtonGenerated, } = props;
    
      return (
        <Component type={`FrooxEngine.LegacyRadiantScreenWrapper\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ActiveColor" id={typeof ActiveColor === "object" && "id" in ActiveColor ? ActiveColor?.id : undefined} value={typeof ActiveColor === "object" && "value" in ActiveColor ? ActiveColor?.value : ActiveColor} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screenRoot" id={typeof _screenRoot === "object" && "id" in _screenRoot ? _screenRoot?.id : undefined} value={typeof _screenRoot === "object" && "value" in _screenRoot ? _screenRoot?.value : _screenRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_screenCanvas" id={typeof _screenCanvas === "object" && "id" in _screenCanvas ? _screenCanvas?.id : undefined} value={typeof _screenCanvas === "object" && "value" in _screenCanvas ? _screenCanvas?.value : _screenCanvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ModalOverlayManager]`} name="_modalOverlayManager" id={typeof _modalOverlayManager === "object" && "id" in _modalOverlayManager ? _modalOverlayManager?.id : undefined} value={typeof _modalOverlayManager === "object" && "value" in _modalOverlayManager ? _modalOverlayManager?.value : _modalOverlayManager} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ExtraSidePadding" id={typeof ExtraSidePadding === "object" && "id" in ExtraSidePadding ? ExtraSidePadding?.id : undefined} value={typeof ExtraSidePadding === "object" && "value" in ExtraSidePadding ? ExtraSidePadding?.value : ExtraSidePadding} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Background" id={typeof Background === "object" && "id" in Background ? Background?.id : undefined} value={typeof Background === "object" && "value" in Background ? Background?.value : Background} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_initialized-ID" id={typeof _initialized === "object" && "id" in _initialized ? _initialized?.id : undefined} value={typeof _initialized === "object" && "value" in _initialized ? _initialized?.value : _initialized} /* default: false */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[${T}]]`} name="InitializeComponent" id={typeof InitializeComponent === "object" && "id" in InitializeComponent ? InitializeComponent?.id : undefined} value={typeof InitializeComponent === "object" && "value" in InitializeComponent ? InitializeComponent?.value : InitializeComponent} /* default: null */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.RadiantDashButton]]`} name="ButtonGenerated" id={typeof ButtonGenerated === "object" && "id" in ButtonGenerated ? ButtonGenerated?.id : undefined} value={typeof ButtonGenerated === "object" && "value" in ButtonGenerated ? ButtonGenerated?.value : ButtonGenerated} /* default: null */  />
        </Component>
      );
    };
    