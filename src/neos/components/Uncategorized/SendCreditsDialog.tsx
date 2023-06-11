import { member, Member, Component } from "../../core";
    
    export interface SendCreditsDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_currentPanel?: member<any>;
_container?: member<any>;
_friendsDialog?: member<any>;
_amountParser?: member<any>;
_commentField?: member<any>;
_withdrawalAddressField?: member<any>;
_anonymousTip?: member<any>;
_sendButton?: member<any>;
_totpCode?: member<any>;
_sendingText?: member<any>;
_tokenSelection?: member<any>;
_usdApproximation?: member<any>;
    }
    
    export function SendCreditsDialog(props: SendCreditsDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_currentPanel,
_container,
_friendsDialog,
_amountParser,
_commentField,
_withdrawalAddressField,
_anonymousTip,
_sendButton,
_totpCode,
_sendingText,
_tokenSelection,
_usdApproximation, } = props;
    
      return (
        <Component type="FrooxEngine.SendCreditsDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  isRaw={typeof _panel === "object" && "isRaw" in _panel && _panel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_currentPanel" id={typeof _currentPanel === "object" && "id" in _currentPanel ? _currentPanel?.id : undefined} value={typeof _currentPanel === "object" && "value" in _currentPanel ? _currentPanel?.value : _currentPanel} /* default: ID0 */  isRaw={typeof _currentPanel === "object" && "isRaw" in _currentPanel && _currentPanel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_container" id={typeof _container === "object" && "id" in _container ? _container?.id : undefined} value={typeof _container === "object" && "value" in _container ? _container?.value : _container} /* default: ID0 */  isRaw={typeof _container === "object" && "isRaw" in _container && _container.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FriendsDialog]`} name="_friendsDialog" id={typeof _friendsDialog === "object" && "id" in _friendsDialog ? _friendsDialog?.id : undefined} value={typeof _friendsDialog === "object" && "value" in _friendsDialog ? _friendsDialog?.value : _friendsDialog} /* default: ID0 */  isRaw={typeof _friendsDialog === "object" && "isRaw" in _friendsDialog && _friendsDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_amountParser" id={typeof _amountParser === "object" && "id" in _amountParser ? _amountParser?.id : undefined} value={typeof _amountParser === "object" && "value" in _amountParser ? _amountParser?.value : _amountParser} /* default: ID0 */  isRaw={typeof _amountParser === "object" && "isRaw" in _amountParser && _amountParser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_commentField" id={typeof _commentField === "object" && "id" in _commentField ? _commentField?.id : undefined} value={typeof _commentField === "object" && "value" in _commentField ? _commentField?.value : _commentField} /* default: ID0 */  isRaw={typeof _commentField === "object" && "isRaw" in _commentField && _commentField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_withdrawalAddressField" id={typeof _withdrawalAddressField === "object" && "id" in _withdrawalAddressField ? _withdrawalAddressField?.id : undefined} value={typeof _withdrawalAddressField === "object" && "value" in _withdrawalAddressField ? _withdrawalAddressField?.value : _withdrawalAddressField} /* default: ID0 */  isRaw={typeof _withdrawalAddressField === "object" && "isRaw" in _withdrawalAddressField && _withdrawalAddressField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_anonymousTip" id={typeof _anonymousTip === "object" && "id" in _anonymousTip ? _anonymousTip?.id : undefined} value={typeof _anonymousTip === "object" && "value" in _anonymousTip ? _anonymousTip?.value : _anonymousTip} /* default: ID0 */  isRaw={typeof _anonymousTip === "object" && "isRaw" in _anonymousTip && _anonymousTip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_sendButton" id={typeof _sendButton === "object" && "id" in _sendButton ? _sendButton?.id : undefined} value={typeof _sendButton === "object" && "value" in _sendButton ? _sendButton?.value : _sendButton} /* default: ID0 */  isRaw={typeof _sendButton === "object" && "isRaw" in _sendButton && _sendButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_totpCode" id={typeof _totpCode === "object" && "id" in _totpCode ? _totpCode?.id : undefined} value={typeof _totpCode === "object" && "value" in _totpCode ? _totpCode?.value : _totpCode} /* default: ID0 */  isRaw={typeof _totpCode === "object" && "isRaw" in _totpCode && _totpCode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_sendingText" id={typeof _sendingText === "object" && "id" in _sendingText ? _sendingText?.id : undefined} value={typeof _sendingText === "object" && "value" in _sendingText ? _sendingText?.value : _sendingText} /* default: ID0 */  isRaw={typeof _sendingText === "object" && "isRaw" in _sendingText && _sendingText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_tokenSelection" id={typeof _tokenSelection === "object" && "id" in _tokenSelection ? _tokenSelection?.id : undefined} value={typeof _tokenSelection === "object" && "value" in _tokenSelection ? _tokenSelection?.value : _tokenSelection} /* default: <i>null</i> */  isRaw={typeof _tokenSelection === "object" && "isRaw" in _tokenSelection && _tokenSelection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_usdApproximation" id={typeof _usdApproximation === "object" && "id" in _usdApproximation ? _usdApproximation?.id : undefined} value={typeof _usdApproximation === "object" && "value" in _usdApproximation ? _usdApproximation?.value : _usdApproximation} /* default: ID0 */  isRaw={typeof _usdApproximation === "object" && "isRaw" in _usdApproximation && _usdApproximation.isRaw ? true : undefined} />
        </Component>
      );
    };
    