AUI.add("aui-property-list",function(q){var h=q.Lang,n=h.isObject,p="auto",l="columnset",d="dblclick",j="editor",r="height",c="key",k="name",b="propertyName",o="scroll",s="selection",f="sort",e="td",i="value",g="width",m="",t="property-list";var a=q.Component.create({NAME:t,ATTRS:{columnset:{valueFn:function(){var u=this;return[{editor:false,key:k,label:u.getString(b),sortable:true},{editor:u.getDefaultEditor(),key:i,label:u.getString(i),sortable:true,width:"auto"}];}},editEvent:{value:d},recordset:{value:[{name:m,value:m}]},scroll:{value:{width:p},validator:n},selection:{value:{selectRow:true},validator:n},sort:{validator:n},strings:{value:{propertyName:"Property Name",value:"Value"}}},EXTENDS:q.DataTable.Base,prototype:{initializer:function(){var u=this;u.after(u._syncScrollWidth,u,"_uiSetWidth");u.after(u._syncScrollHeight,u,"_uiSetHeight");u._plugDependencies();},_editCell:function(v){var u=this;var w=u.get(l);if(v.column.get(c)===k){v.alignNode=v.cell.next(e);v.column=w.keyHash[i];}return a.superclass._editCell.call(this,v);},getDefaultEditor:function(){return new q.TextCellEditor();},_onEditorSave:function(w){var u=this;var v=u.selection;if(v){v.activeColumnIndex=1;}return a.superclass._onEditorSave.call(this,w);},_plugDependencies:function(){var u=this;u.plug(q.Plugin.DataTableSelection,u.get(s)).plug(q.Plugin.DataTableScroll,u.get(o)).plug(q.Plugin.DataTableSort,u.get(f));},_syncScrollHeight:function(v){var u=this;u.scroll.set(r,v);},_syncScrollWidth:function(v){var u=this;u.scroll.set(g,v);}}});q.PropertyList=a;},"@VERSION@",{requires:["aui-datatable"],skinnable:true});