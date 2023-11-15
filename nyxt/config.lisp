(define-nyxt-user-system-and-load "nyxt-user/basic-config"
    :components ("style" "status"))

(define-nyxt-user-system-and-load "nyxt-user/dark-reader"
    :depends-on (:nx-dark-reader) :components ("dark-reader.lisp"))

(define-configuration buffer
    ((default-modes
         (pushnew 'nyxt/mode/vi:vi-normal-mode %slot-value%))))

(define-configuration browser
    ((default-new-buffer-url (quri:uri "https://search.wisdomrepo.dev"))))

;; Snipet code for DRM content.
;;(defmethod ffi-buffer-make :after ((buffer gtk-buffer))
;; (let ((settings (webkit:webkit-web-view-get-settings (nyxt::gtk-object buffer))))
;;  (setf
;;  (webkit:webkit-settings-enable-encrypted-media settings) t)))
