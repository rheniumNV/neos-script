import { member, Member, Component } from "../../../core";
    
    export interface ScaleObjectCreatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Manager?: member<any>;
Template?: member<any>;
TemplateNameField?: member<any>;
TemplateSizeField?: member<any>;
_sizeParser?: member<any>;
_material?: member<any>;
    }
    
    export function ScaleObjectCreator(props: ScaleObjectCreatorInput){
      const { id, persistentId, updateOrder, Enabled,
Manager,
Template,
TemplateNameField,
TemplateSizeField,
_sizeParser,
_material, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleObjectCreator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScaleObjectManager]`} name="Manager" id={typeof Manager === "object" && "id" in Manager ? Manager?.id : undefined} value={typeof Manager === "object" && "value" in Manager ? Manager?.value : Manager} /* default: ID0 */  isRaw={typeof Manager === "object" && "isRaw" in Manager && Manager.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Template" id={typeof Template === "object" && "id" in Template ? Template?.id : undefined} value={typeof Template === "object" && "value" in Template ? Template?.value : Template} /* default: ID0 */  isRaw={typeof Template === "object" && "isRaw" in Template && Template.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="TemplateNameField" id={typeof TemplateNameField === "object" && "id" in TemplateNameField ? TemplateNameField?.id : undefined} value={typeof TemplateNameField === "object" && "value" in TemplateNameField ? TemplateNameField?.value : TemplateNameField} /* default: ID0 */  isRaw={typeof TemplateNameField === "object" && "isRaw" in TemplateNameField && TemplateNameField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Double]]`} name="TemplateSizeField" id={typeof TemplateSizeField === "object" && "id" in TemplateSizeField ? TemplateSizeField?.id : undefined} value={typeof TemplateSizeField === "object" && "value" in TemplateSizeField ? TemplateSizeField?.value : TemplateSizeField} /* default: ID0 */  isRaw={typeof TemplateSizeField === "object" && "isRaw" in TemplateSizeField && TemplateSizeField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuantityTextEditorParser\`1[QuantityX.Distance]]`} name="_sizeParser" id={typeof _sizeParser === "object" && "id" in _sizeParser ? _sizeParser?.id : undefined} value={typeof _sizeParser === "object" && "value" in _sizeParser ? _sizeParser?.value : _sizeParser} /* default: ID0 */  isRaw={typeof _sizeParser === "object" && "isRaw" in _sizeParser && _sizeParser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
        </Component>
      );
    };
    