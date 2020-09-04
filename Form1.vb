Public Class Main
    Private Sub Label1_Click(sender As Object, e As EventArgs) Handles icon.Click
        icon.Text = "K"
        icon.Refresh()

    End Sub

    Private Sub smile_Click(sender As Object, e As EventArgs) Handles smile.Click
        icon.Text = "J"
        Liststep.Items.Add("J")
    End Sub

    Private Sub frown_Click(sender As Object, e As EventArgs) Handles frown.Click
        icon.Text = "L"
        Liststep.Items.Add("L")
    End Sub

    Private Sub reset_Click(sender As Object, e As EventArgs) Handles reset.Click
        icon.Text = "K"
        Text_in.ResetText()
        Liststep.Items.Clear()

    End Sub

    Private Sub ListBox1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles Liststep.SelectedIndexChanged
        icon.Text = Liststep.Text
    End Sub

    Private Sub TextBox1_TextChanged(sender As Object, e As EventArgs) Handles Text_in.TextChanged
        Dim Text As String
        Text = Text_in.Text
        If Text <> "" Then
            Liststep.Items.Add(Text)
            icon.Text = Text
        End If

    End Sub
End Class
