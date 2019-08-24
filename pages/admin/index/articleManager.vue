<template>
    <div class="editor-container">
       <div class="quill-editor" 
        v-model="content"
        v-quill:myQuillEditor="editorOption">
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: '',
            editorOption: {
                placeholder: '请输入'
            }
        }
    },
}
</script>
<style scoped>
    .editor-container{
        height: 400px;
    }
</style>

