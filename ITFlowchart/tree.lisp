(setf *random-state* (make-random-state t))

(defun tree (height)
    (defvar branches (floor (/ height 10)))
    (print "^^")
    (doTimes i height 
        (if (/= ((% i 10)) 0) 
            (print("||"))
            
        )
    )
)
