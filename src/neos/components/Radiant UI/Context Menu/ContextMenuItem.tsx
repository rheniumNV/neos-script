import { member, Member, Component } from "../../../core";
    
    export interface ContextMenuItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Highlight?: member<boolean>;
Icon?: member<any>;
Sprite?: member<any>;
Label?: member<any>;
Color?: member<[number, number, number, number]>;
_menu?: member<any>;
_highlighted?: member<boolean>;
_arc?: member<any>;
_outerRadius?: member<any>;
_button?: member<any>;
    }
    
    export function ContextMenuItem(props: ContextMenuItemInput){
      const { id, persistentId, updateOrder, Enabled,
Highlight,
Icon,
Sprite,
Label,
Color,
_menu,
_highlighted,
_arc,
_outerRadius,
_button, } = props;
    
      return (
        <Component type="FrooxEngine.ContextMenuItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Highlight" id={typeof Highlight === "object" && "id" in Highlight ? Highlight?.id : undefined} value={typeof Highlight === "object" && "value" in Highlight ? Highlight?.value : Highlight} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.Sprite]]`} name="Sprite" id={typeof Sprite === "object" && "id" in Sprite ? Sprite?.id : undefined} value={typeof Sprite === "object" && "value" in Sprite ? Sprite?.value : Sprite} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenu]`} name="_menu" id={typeof _menu === "object" && "id" in _menu ? _menu?.id : undefined} value={typeof _menu === "object" && "value" in _menu ? _menu?.value : _menu} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_highlighted" id={typeof _highlighted === "object" && "id" in _highlighted ? _highlighted?.id : undefined} value={typeof _highlighted === "object" && "value" in _highlighted ? _highlighted?.value : _highlighted} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_arc" id={typeof _arc === "object" && "id" in _arc ? _arc?.id : undefined} value={typeof _arc === "object" && "value" in _arc ? _arc?.value : _arc} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_outerRadius" id={typeof _outerRadius === "object" && "id" in _outerRadius ? _outerRadius?.id : undefined} value={typeof _outerRadius === "object" && "value" in _outerRadius ? _outerRadius?.value : _outerRadius} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  />
        </Component>
      );
    };
    