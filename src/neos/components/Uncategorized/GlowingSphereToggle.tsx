import { member, Member, Component } from "../../core";
    
    export interface GlowingSphereToggleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetField?: member<any>;
FadeSpeed?: member<number>;
CooldownTime?: member<number>;
Radius?: member<number>;
GlowColor?: member<[number, number, number, number]>;
_emissiveColor?: member<any>;
_rimColor?: member<any>;
_sphereRadius?: member<any>;
_sphereExtrude?: member<any>;
_colliderRadius?: member<any>;
    }
    
    export function GlowingSphereToggle(props: GlowingSphereToggleInput){
      const { id, persistentId, updateOrder, Enabled,
TargetField,
FadeSpeed,
CooldownTime,
Radius,
GlowColor,
_emissiveColor,
_rimColor,
_sphereRadius,
_sphereExtrude,
_colliderRadius, } = props;
    
      return (
        <Component type="FrooxEngine.GlowingSphereToggle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Boolean]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FadeSpeed" id={typeof FadeSpeed === "object" && "id" in FadeSpeed ? FadeSpeed?.id : undefined} value={typeof FadeSpeed === "object" && "value" in FadeSpeed ? FadeSpeed?.value : FadeSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CooldownTime" id={typeof CooldownTime === "object" && "id" in CooldownTime ? CooldownTime?.id : undefined} value={typeof CooldownTime === "object" && "value" in CooldownTime ? CooldownTime?.value : CooldownTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="GlowColor" id={typeof GlowColor === "object" && "id" in GlowColor ? GlowColor?.id : undefined} value={typeof GlowColor === "object" && "value" in GlowColor ? GlowColor?.value : GlowColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_emissiveColor" id={typeof _emissiveColor === "object" && "id" in _emissiveColor ? _emissiveColor?.id : undefined} value={typeof _emissiveColor === "object" && "value" in _emissiveColor ? _emissiveColor?.value : _emissiveColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_rimColor" id={typeof _rimColor === "object" && "id" in _rimColor ? _rimColor?.id : undefined} value={typeof _rimColor === "object" && "value" in _rimColor ? _rimColor?.value : _rimColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_sphereRadius" id={typeof _sphereRadius === "object" && "id" in _sphereRadius ? _sphereRadius?.id : undefined} value={typeof _sphereRadius === "object" && "value" in _sphereRadius ? _sphereRadius?.value : _sphereRadius} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_sphereExtrude" id={typeof _sphereExtrude === "object" && "id" in _sphereExtrude ? _sphereExtrude?.id : undefined} value={typeof _sphereExtrude === "object" && "value" in _sphereExtrude ? _sphereExtrude?.value : _sphereExtrude} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_colliderRadius" id={typeof _colliderRadius === "object" && "id" in _colliderRadius ? _colliderRadius?.id : undefined} value={typeof _colliderRadius === "object" && "value" in _colliderRadius ? _colliderRadius?.value : _colliderRadius} /* default: ID0 */  />
        </Component>
      );
    };
    