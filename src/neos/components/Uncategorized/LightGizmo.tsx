import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LightGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Active?: member<boolean>;
_target?: member<any>;
_menu?: member<any>;
_enabledItem?: member<any>;
_noShadowsItem?: member<any>;
_hardShadowsItem?: member<any>;
_softShadowsItem?: member<any>;
_pointItem?: member<any>;
_spotItem?: member<any>;
_directionalItem?: member<any>;
_settingsItem?: member<any>;
_menuColorDrives?: member<any>;
_menuActive?: member<any>;
_pointIconActive?: member<any>;
_spotIconActive?: member<any>;
_directionalIconActive?: member<any>;
_pointActive?: member<any>;
_spotActive?: member<any>;
_directionalActive?: member<any>;
_pointGizmo?: member<any>;
_spotGizmo?: member<any>;
_dirGizmo?: member<any>;
_lightDialog?: member<any>;
_iconMaterial?: member<any>;
    }
    
    export function LightGizmo(props: LightGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
Active,
_target,
_menu,
_enabledItem,
_noShadowsItem,
_hardShadowsItem,
_softShadowsItem,
_pointItem,
_spotItem,
_directionalItem,
_settingsItem,
_menuColorDrives,
_menuActive,
_pointIconActive,
_spotIconActive,
_directionalIconActive,
_pointActive,
_spotActive,
_directionalActive,
_pointGizmo,
_spotGizmo,
_dirGizmo,
_lightDialog,
_iconMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.LightGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Active" id={typeof Active === "object" && "id" in Active ? Active?.id : undefined} value={typeof Active === "object" && "value" in Active ? Active?.value : Active} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Light]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController]`} name="_menu" id={typeof _menu === "object" && "id" in _menu ? _menu?.id : undefined} value={typeof _menu === "object" && "value" in _menu ? _menu?.value : _menu} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_enabledItem" id={typeof _enabledItem === "object" && "id" in _enabledItem ? _enabledItem?.id : undefined} value={typeof _enabledItem === "object" && "value" in _enabledItem ? _enabledItem?.value : _enabledItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_noShadowsItem" id={typeof _noShadowsItem === "object" && "id" in _noShadowsItem ? _noShadowsItem?.id : undefined} value={typeof _noShadowsItem === "object" && "value" in _noShadowsItem ? _noShadowsItem?.value : _noShadowsItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_hardShadowsItem" id={typeof _hardShadowsItem === "object" && "id" in _hardShadowsItem ? _hardShadowsItem?.id : undefined} value={typeof _hardShadowsItem === "object" && "value" in _hardShadowsItem ? _hardShadowsItem?.value : _hardShadowsItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_softShadowsItem" id={typeof _softShadowsItem === "object" && "id" in _softShadowsItem ? _softShadowsItem?.id : undefined} value={typeof _softShadowsItem === "object" && "value" in _softShadowsItem ? _softShadowsItem?.value : _softShadowsItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_pointItem" id={typeof _pointItem === "object" && "id" in _pointItem ? _pointItem?.id : undefined} value={typeof _pointItem === "object" && "value" in _pointItem ? _pointItem?.value : _pointItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_spotItem" id={typeof _spotItem === "object" && "id" in _spotItem ? _spotItem?.id : undefined} value={typeof _spotItem === "object" && "value" in _spotItem ? _spotItem?.value : _spotItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_directionalItem" id={typeof _directionalItem === "object" && "id" in _directionalItem ? _directionalItem?.id : undefined} value={typeof _directionalItem === "object" && "value" in _directionalItem ? _directionalItem?.value : _directionalItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_settingsItem" id={typeof _settingsItem === "object" && "id" in _settingsItem ? _settingsItem?.id : undefined} value={typeof _settingsItem === "object" && "value" in _settingsItem ? _settingsItem?.value : _settingsItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.color]]`} name="_menuColorDrives" id={typeof _menuColorDrives === "object" && "id" in _menuColorDrives ? _menuColorDrives?.id : undefined} value={typeof _menuColorDrives === "object" && "value" in _menuColorDrives ? _menuColorDrives?.value : _menuColorDrives} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.color]] */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_menuActive" id={typeof _menuActive === "object" && "id" in _menuActive ? _menuActive?.id : undefined} value={typeof _menuActive === "object" && "value" in _menuActive ? _menuActive?.value : _menuActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_pointIconActive" id={typeof _pointIconActive === "object" && "id" in _pointIconActive ? _pointIconActive?.id : undefined} value={typeof _pointIconActive === "object" && "value" in _pointIconActive ? _pointIconActive?.value : _pointIconActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_spotIconActive" id={typeof _spotIconActive === "object" && "id" in _spotIconActive ? _spotIconActive?.id : undefined} value={typeof _spotIconActive === "object" && "value" in _spotIconActive ? _spotIconActive?.value : _spotIconActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_directionalIconActive" id={typeof _directionalIconActive === "object" && "id" in _directionalIconActive ? _directionalIconActive?.id : undefined} value={typeof _directionalIconActive === "object" && "value" in _directionalIconActive ? _directionalIconActive?.value : _directionalIconActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_pointActive" id={typeof _pointActive === "object" && "id" in _pointActive ? _pointActive?.id : undefined} value={typeof _pointActive === "object" && "value" in _pointActive ? _pointActive?.value : _pointActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_spotActive" id={typeof _spotActive === "object" && "id" in _spotActive ? _spotActive?.id : undefined} value={typeof _spotActive === "object" && "value" in _spotActive ? _spotActive?.value : _spotActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_directionalActive" id={typeof _directionalActive === "object" && "id" in _directionalActive ? _directionalActive?.id : undefined} value={typeof _directionalActive === "object" && "value" in _directionalActive ? _directionalActive?.value : _directionalActive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SphereGizmo]`} name="_pointGizmo" id={typeof _pointGizmo === "object" && "id" in _pointGizmo ? _pointGizmo?.id : undefined} value={typeof _pointGizmo === "object" && "value" in _pointGizmo ? _pointGizmo?.value : _pointGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ConeGizmo]`} name="_spotGizmo" id={typeof _spotGizmo === "object" && "id" in _spotGizmo ? _spotGizmo?.id : undefined} value={typeof _spotGizmo === "object" && "value" in _spotGizmo ? _spotGizmo?.value : _spotGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VectorGizmo]`} name="_dirGizmo" id={typeof _dirGizmo === "object" && "id" in _dirGizmo ? _dirGizmo?.id : undefined} value={typeof _dirGizmo === "object" && "value" in _dirGizmo ? _dirGizmo?.value : _dirGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.LightDialog]`} name="_lightDialog" id={typeof _lightDialog === "object" && "id" in _lightDialog ? _lightDialog?.id : undefined} value={typeof _lightDialog === "object" && "value" in _lightDialog ? _lightDialog?.value : _lightDialog} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_iconMaterial" id={typeof _iconMaterial === "object" && "id" in _iconMaterial ? _iconMaterial?.id : undefined} value={typeof _iconMaterial === "object" && "value" in _iconMaterial ? _iconMaterial?.value : _iconMaterial} /* default: ID0 */  />
        </Component>
      );
    };
    